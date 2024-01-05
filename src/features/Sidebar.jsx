import { useContext } from "react";
import SidebarDarkButton from "./SidebarDarkButton";
import { AppContext } from "../App";
import CreateNewBoard from "./CreateNewBoard";

function Sidebar() {
  const { darkMode, visible } = useContext(AppContext);

  return (
    <div
      className={`min-h-[calc(100vh-5.7rem)] min-w-96 w-[25vw] z-30   ${
        visible ? " col-start-1" : " -translate-x-full"
      } max-lg:hidden transition-transform  duration-1000  flex flex-col  justify-between    
    px-5
        border-r-[1px]  ${
          darkMode ? " border-linesDark bg-darkGrey" : "border-linesLight bg-white"
        }`}
    >
      <div className={`flex flex-col px-5 gap-16 `}>
        <h2 className=" text-xl font-medium mt-5 tracking-widest  text-mediumGrey transition-opacity duration-700  ">
          ALL BOARDS ( {1} )
        </h2>
        <CreateNewBoard />
      </div>

      <div className="">
        <SidebarDarkButton />
      </div>
    </div>
  );
}

export default Sidebar;
