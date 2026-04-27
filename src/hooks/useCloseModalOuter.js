import { useEffect, useRef } from "react";

export default function useCloseModalOuter(handleClose, capturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref?.current && !ref?.current.contains(e.target)) {
          handleClose();
        }
      }
      document.addEventListener("click", handleClick, capturing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handleClose, capturing],
  );

  return ref;
}
