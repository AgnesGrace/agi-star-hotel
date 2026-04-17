import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.4rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2.4rem;
      font-weight: 600;
    `}
  line-height:1.4;
`;

export default Heading;
