import { useRef } from "react";
import useOnOutsideClick from "../hooks/useOnOutsideClick";

function Modal({ children, setOpen }) {
  const ref = useRef(null);
  useOnOutsideClick(setOpen, ref);
  return (
    <div className=" z-50 fixed  inset-0  bg-black/40 flex flex-col justify-center items-center">
      <div className=" bg-none" ref={ref}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
