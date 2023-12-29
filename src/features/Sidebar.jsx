import { useContext } from "react";
import { DashboardContext } from "./DashboardLayout";
import SidebarDarkButton from "./SidebarDarkButton";
import HideSidebar from "./HideSidebar";

function Sidebar() {
  const { darkMode, visible } = useContext(DashboardContext);

  return (
    <div
      className={`h-full max-lg:hidden  transition-all  flex flex-col  justify-between   relative   ${
        visible ? "w-3/12 px-5" : "w-0 "
      }   border-r-[1px]  ${
        darkMode ? " border-linesDark bg-darkGrey" : "border-linesLight bg-white"
      }`}
    >
      <div className="px-5">
        <h2 className=" text-headingXl font-medium mt-5 text-mediumGrey  ">ALL BOARDS ( {1} )</h2>
      </div>
      <div className="">
        <SidebarDarkButton />
        <HideSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
