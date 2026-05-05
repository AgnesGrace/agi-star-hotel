import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.4rem;
    `}
`;

export default Row;
