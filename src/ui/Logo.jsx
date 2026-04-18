import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.8rem;
  color: var(--color-primary-900);
`;

function Logo() {
  return (
    <StyledLogo>
      <p>AgiStar Hotel</p>
    </StyledLogo>
  );
}

export default Logo;
