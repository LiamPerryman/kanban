import { Outlet } from "react-router-dom";

import DashboardNavbar from "./DashboardNavbar";
import HideSidebar from "./HideSidebar";
import useResize from "../hooks/useResize";
import { useContext } from "react";
import { AppContext } from "../App";

function DashboardLayout() {
  const { setVisible, darkMode } = useContext(AppContext);
  useResize(setVisible);
  return (
    <div
      className={`min-h-screen  overflow-hidden  ${
        darkMode ? "bg-veryDarkGrey" : " bg-lightGreyLightBG"
      }  `}
    >
      <DashboardNavbar />
      <Outlet />
      <HideSidebar />
    </div>
  );
}

export default DashboardLayout;
