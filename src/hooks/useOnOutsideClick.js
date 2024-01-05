import { useEffect } from "react";

function useOnOutsideClick(setOpen, ref) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick);
  }, [setOpen, ref]);
}

export default useOnOutsideClick;
