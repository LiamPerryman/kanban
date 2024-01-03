import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { AppContext } from "../App";

function NavLinkButton({ text, to }) {
  const { darkMode, setClicked } = useContext(AppContext);
  return (
    <button onClick={() => setClicked(false)}>
      <NavLink
        to={to}
        className={`text-headingXl   transition-colors ease-in-out duration-300 ${
          darkMode ? "text-white  hover:text-mainPurple " : "text-mainPurple hover:text-linesDark "
        } `}
      >
        {text}
      </NavLink>
    </button>
  );
}

export default NavLinkButton;
