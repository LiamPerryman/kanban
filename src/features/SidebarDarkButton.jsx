import { useContext } from "react";
import { MdOutlineDarkMode, MdSunny } from "react-icons/md";
import { AppContext } from "../App";
function SidebarDarkButton() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <div
      className={`flex flex-row h-20   rounded-xl justify-center items-center gap-8 mb-32  ${
        darkMode ? "bg-veryDarkGrey " : "bg-lightGreyLightBG"
      }  `}
    >
      <MdSunny size={"2rem"} className=" text-mediumGrey" />
      <div
        className={`flex flex-row h-5 justify-start rounded-full relative items-center bg-mainPurple w-12 `}
      >
        <button
          onClick={() => setDarkMode((dark) => !dark)}
          className={`h-4 w-4 bg-white  rounded-full transition-all duration-500 translate-x-[2px] ${
            darkMode && "translate-x-[30px]"
          } `}
        ></button>
      </div>
      <MdOutlineDarkMode size={"2rem"} className="text-mediumGrey" />
    </div>
  );
}

export default SidebarDarkButton;
