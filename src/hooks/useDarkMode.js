import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function useDarkMode() {
  const darkModeContext = useContext(DarkModeContext);
  if (darkModeContext === undefined)
    throw new Error("Dark mode Context was used in the wrong place");

  return darkModeContext;
}
