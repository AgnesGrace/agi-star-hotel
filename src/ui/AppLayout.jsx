import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.main`
  padding: 4rem 4.8rem;
  background-color: var(--color-grey-50);
  overflow: scroll;
`;
const MainContainer = styled.div`
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 20rem 1fr;
  }
`;
export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledAppLayout>
      <Header onMenuClick={() => setIsOpen((open) => !open)} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Main>
    </StyledAppLayout>
  );
}
