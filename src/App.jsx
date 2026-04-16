import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const AppDiv = styled.div`
  width: 90%;
  height: 100vh;
  margin: 2rem auto;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppDiv>
        <Button>Sign In</Button>
        <Input type="number" placeholder="Number of guests" />
      </AppDiv>
    </>
  );
}
