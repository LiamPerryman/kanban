import { useContext } from "react";
import { DashboardContext } from "../features/DashboardLayout";

function Dashboard() {
  const { visible, darkMode } = useContext(DashboardContext);
  return (
    <div
      className={`h-screen w-9/12 transition-none  max-lg:w-full ${
        darkMode ? "bg-veryDarkGrey" : " bg-lightGreyLightBG"
      } `}
    ></div>
  );
}

export default Dashboard;
