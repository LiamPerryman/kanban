import { createPortal } from "react-dom";
function Modal({ children }) {
  return createPortal(children, document.body);
}

export default Modal;
