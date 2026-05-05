import styled from "styled-components";
import DarkMode from "./DarkMode";
import { useNavigate } from "react-router";

const StyledMeainMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;
export default function MainMenu() {
  const navigate = useNavigate();
  return (
    <StyledMeainMenu>
      <li>
        <DarkMode />
      </li>
      <li onClick={() => navigate("/login")}>logout</li>
    </StyledMeainMenu>
  );
}
