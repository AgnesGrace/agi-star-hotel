import styled from "styled-components";
import Heading from "../ui/Heading";
import { MdBedroomChild } from "react-icons/md";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
function PersonalCorner() {
  return (
    <>
      <Heading as="h1">Your Personal Area</Heading>
      <EmptyContainer>
        <MdBedroomChild size={40} />
        <p>Check back later</p>
      </EmptyContainer>
    </>
  );
}

export default PersonalCorner;
