import Modal from "./Modal";

import { createPortal } from "react-dom";

function Window({ children, setOpen }) {
  return createPortal(<Modal setOpen={setOpen}>{children}</Modal>, document.body);
}

export default Window;
