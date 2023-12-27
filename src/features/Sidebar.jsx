import { useContext } from "react";
import { DashboardContext } from "./DashboardLayout";
import { LogoDark, LogoLight } from "../utils/imageExport";
import Button from "./Button";

function Sidebar() {
  const { darkMode, visible } = useContext(DashboardContext);
  return (
    <div
      className={`h-screen max-lg:hidden   ${
        visible ? "w-3/12" : "w-0"
      }   border-r-[1px] transition-all duration-300  ${
        darkMode ? " border-linesDark bg-darkGrey" : "border-linesLight bg-white"
      }`}
    ></div>
  );
}

export default Sidebar;
