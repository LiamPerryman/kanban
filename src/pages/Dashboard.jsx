import { useContext } from "react";
import { DashboardContext } from "../features/DashboardLayout";

function Dashboard() {
  const { visible, darkMode } = useContext(DashboardContext);
  return (
    <div
      className={`h-full  ${visible ? "w-9/12" : "w-full"} transition-none   max-lg:w-full ${
        darkMode ? "bg-veryDarkGrey" : " bg-lightGreyLightBG"
      } `}
    ></div>
  );
}

export default Dashboard;
