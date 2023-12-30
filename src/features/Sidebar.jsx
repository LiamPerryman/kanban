import { useContext } from "react";
import { DashboardContext } from "./DashboardLayout";
import SidebarDarkButton from "./SidebarDarkButton";

function Sidebar() {
  const { darkMode, visible } = useContext(DashboardContext);

  return (
    <div
      className={`min-h-[calc(100vh-5.7rem)] fixed  w-[25vw] z-30   ${
        visible ? " col-start-1" : " -translate-x-full"
      } max-lg:hidden transition-transform  duration-700  flex flex-col  justify-between    
    px-5
        border-r-[1px]  ${
          darkMode ? " border-linesDark bg-darkGrey" : "border-linesLight bg-white"
        }`}
    >
      <div className={`px-5 `}>
        <h2 className=" text-headingXl font-medium mt-5 text-mediumGrey transition-opacity duration-700  ">
          ALL BOARDS ( {1} )
        </h2>
      </div>
      <div className="">
        <SidebarDarkButton />
      </div>
    </div>
  );
}

export default Sidebar;
