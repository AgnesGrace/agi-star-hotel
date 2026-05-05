import ButtonIcon from "./ButtonIcon";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import useDarkMode from "../hooks/useDarkMode";

export default function DarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {!isDarkMode ? <MdDarkMode /> : <MdLightMode />}
    </ButtonIcon>
  );
}
