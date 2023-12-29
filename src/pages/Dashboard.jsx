import { useContext } from "react";
import { DashboardContext } from "../features/DashboardLayout";

function Dashboard() {
  const { visible, darkMode } = useContext(DashboardContext);
  return (
    <div
      className={`min-h-[calc(100vh-5.7rem)]    items-center gap-5 p-5  overflow-x-scroll  ${
        visible ? " col-start-2  col-span-3 " : " col-start-1 col-span-full  "
      }    ${darkMode ? "bg-veryDarkGrey" : " bg-lightGreyLightBG"} `}
    >
      <div className=" flex flex-row h-full w-screen  items-center   gap-5 ">
        <div className="h-full w-96 bg-mediumGrey rounded-3xl opacity-100"></div>
        <div className="h-full w-96 bg-mediumGrey rounded-3xl opacity-30"></div>
        <div className="h-full w-96 bg-mediumGrey rounded-3xl opacity-30"></div>
        <div className="h-full w-96 bg-mediumGrey rounded-3xl opacity-30"></div>
      </div>
    </div>
  );
}

export default Dashboard;
