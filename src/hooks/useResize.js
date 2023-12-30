import { useEffect } from "react";

function useResize(setState) {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) setState(false);
      else {
        setState(true);
      }
    }
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
  }, [setState]);
}

export default useResize;
