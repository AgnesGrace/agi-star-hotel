import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Main = styled.main`
  padding: 4rem 4.8rem;
  background-color: var(--color-grey-50);
  overflow: scroll;
`;
const MainContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto 1fr;
`;
export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Main>
    </StyledAppLayout>
  );
}
