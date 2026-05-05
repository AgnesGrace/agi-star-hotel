import { createContext, useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import useCloseModalOuter from "../hooks/useCloseModalOuter";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;
const MenusContext = createContext();
export default function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const closeMenu = () => setOpenId("");
  const openMenu = setOpenId;
  return (
    <MenusContext
      value={{ openId, closeMenu, openMenu, position, setPosition }}
    >
      {children}
    </MenusContext>
  );
}

function Toggle({ id }) {
  const { closeMenu, openMenu, openId, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    openId === "" || openId !== id ? openMenu(id) : closeMenu();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.height + rect.y,
    });
  }
  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}
function List({ id, children }) {
  const { openId, position, closeMenu } = useContext(MenusContext);
  const ref = useCloseModalOuter(closeMenu);

  useEffect(() => {
    function handleScroll() {
      closeMenu();
    }

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [closeMenu]);

  if (openId !== id) return null;
  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body,
  );
}
function Button({ children, icon, onClick }) {
  const { closeMenu } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    onClick?.();
    closeMenu();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon} {children}
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
