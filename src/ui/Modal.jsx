import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import useCloseModalOuter from "../hooks/useCloseModalOuter";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

/*export default function Modal({ onCloseModal, children }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onCloseModal}>
          <IoCloseSharp />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
} */

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  function handleClose() {
    setOpenName("");
  }
  const openModal = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, handleClose, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ windowToOpen, children }) {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(windowToOpen) });
}

function Window({ name, children }) {
  const { openName, handleClose } = useContext(ModalContext);
  const ref = useCloseModalOuter(handleClose);

  if (name !== openName) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={handleClose}>
          <IoCloseSharp />
        </Button>
        <div>{cloneElement(children, { onCloseModal: handleClose })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
