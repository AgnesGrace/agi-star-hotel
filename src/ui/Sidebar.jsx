import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 22rem;
  z-index: 10000;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
  }
`;
export default function Sidebar({ isOpen, onClose }) {
  return (
    <StyledSidebar isOpen={isOpen}>
      <Logo />
      <MainNav onClose={onClose} />
    </StyledSidebar>
  );
}
