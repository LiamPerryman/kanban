import { useContext } from "react";
import MenuButton from "./MenuButton";

import Modal from "./Modal";
import MobileMenu from "./MobileMenu";
import { AppContext } from "../App";

function MobileNavbar() {
  const { clicked, setClicked } = useContext(AppContext);
  return (
    <div className="hidden z-30 max-[1024px]:flex max-[1024px]:flex-column relative">
      <MenuButton clicked={clicked} setClicked={setClicked} />
      <Modal>
        <MobileMenu />
      </Modal>
    </div>
  );
}

export default MobileNavbar;
