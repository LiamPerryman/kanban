import { Outlet } from "react-router-dom";
import { createContext, useEffect, useMemo, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import HideSidebar from "./HideSidebar";
import useResize from "../hooks/useResize";

export const DashboardContext = createContext();

function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const [visible, setVisible] = useState(true);
  useResize(setVisible);
  const value = useMemo(
    () => ({ darkMode, setDarkMode, visible, setVisible }),
    [darkMode, visible]
  );
  return (
    <DashboardContext.Provider value={value}>
      <div
        on
        className={`min-h-screen  overflow-hidden  ${
          darkMode ? "bg-veryDarkGrey" : " bg-lightGreyLightBG"
        }  `}
      >
        <DashboardNavbar />
        <Outlet />
        <HideSidebar />
      </div>
    </DashboardContext.Provider>
  );
}

export default DashboardLayout;
