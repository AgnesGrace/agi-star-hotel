import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerBase = styled.div`
  width: 6.2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, var(--color-primary-600) 94%, #0000) top/10px
      10px no-repeat,
    conic-gradient(#0000 30%, var(--color-primary-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

const FullScreenWrapper = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.2);
  z-index: 99999;
`;

function Spinner({ fullScreen = false }) {
  if (fullScreen) {
    return (
      <FullScreenWrapper>
        <SpinnerBase />
      </FullScreenWrapper>
    );
  }

  return <SpinnerBase style={{ margin: "4.2rem auto" }} />;
}

export default Spinner;
