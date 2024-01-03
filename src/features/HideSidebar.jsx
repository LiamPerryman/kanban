import { useContext } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { AppContext } from "../App";
function HideSidebar() {
  const { visible, setVisible, darkMode } = useContext(AppContext);
  return (
    <button
      onClick={() => setVisible((show) => !show)}
      className={`  text-mediumGrey z-50 max-lg:hidden  ${
        darkMode ? "hover:text-white" : "hover:text-black"
      } hover:cursor-pointer  flex flex-row items-center gap-5 fixed bottom-0 h-16 -translate-y-12
      } `}
    >
      <div
        className={`flex flex-row justify-center items-center gap-5  ${
          !visible && "h-16 w-16 transition-all hover:w-32  bg-mainPurple  rounded-r-full "
        } ${visible && "px-5"}`}
      >
        <FaEyeSlash size={20} />
        <h2 className={`text-headingLg font-semibold ${!visible && "hidden"}`}>Hide Sidebar</h2>
      </div>
    </button>
  );
}

export default HideSidebar;
