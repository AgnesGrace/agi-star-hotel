import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

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
        <Heading as="h1">AgiStar Hotel</Heading>
        <Heading as="h4">I am H4</Heading>
        <Button buttonSize="small" buttonVariation="primary">
          Sign In
        </Button>
        <Input type="number" placeholder="Number of guests" />
      </AppDiv>
    </>
  );
}
