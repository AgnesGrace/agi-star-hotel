import styled from "styled-components";
import MainMenu from "./MainMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { HiOutlineMenu } from "react-icons/hi";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  z-index: 9999;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;
const MainNvaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export default function Header({ onMenuClick }) {
  return (
    <StyledHeader>
      <UserAvatar />

      <div>
        <MainNvaContainer>
          <MainMenu />
          <MenuButton onClick={onMenuClick}>
            <HiOutlineMenu size={24} />
          </MenuButton>
        </MainNvaContainer>
      </div>
    </StyledHeader>
  );
}
