import { useContext } from "react";
import { DashboardContext } from "./DashboardLayout";
import { FaEyeSlash } from "react-icons/fa";
function HideSidebar() {
  const { visible, setVisible, darkMode } = useContext(DashboardContext);
  return (
    <div
      onClick={() => setVisible((show) => !show)}
      className={` w-full  text-mediumGrey  ${
        darkMode ? "hover:text-white" : "hover:text-black"
      } hover:cursor-pointer transition-colors flex flex-row items-center gap-5 -translate-y-12 `}
    >
      <div
        className={`flex flex-row justify-center items-center gap-5  ${
          !visible && "h-16 w-16 transition-all hover:w-32  bg-mainPurple fixed rounded-r-full "
        }`}
      >
        <FaEyeSlash size={20} />
        <h2 className={`text-headingLg font-semibold ${!visible && "hidden"}`}>Hide Sidebar</h2>
      </div>
    </div>
  );
}

export default HideSidebar;
