import { useState } from "react";
import MenuButton from "./MenuButton";

function MobileNavbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="hidden max-[1024px]:flex max-[1024px]:flex-column">
      <MenuButton clicked={clicked} setClicked={setClicked} />
    </div>
  );
}

export default MobileNavbar;
