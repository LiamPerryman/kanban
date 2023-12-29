import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { createContext, useMemo, useState } from "react";

import DashboardNavbar from "./DashboardNavbar";
import HideSidebar from "./HideSidebar";

export const DashboardContext = createContext();

function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const [visible, setVisible] = useState(true);
  const value = useMemo(
    () => ({ darkMode, setDarkMode, visible, setVisible }),
    [darkMode, visible]
  );
  return (
    <DashboardContext.Provider value={value}>
      <div className={`min-h-screen`}>
        <DashboardNavbar />
        <div
          className={`grid grid-cols-4 relative    ${
            darkMode ? "bg-veryDarkGrey" : "bg-lightGreyLightBG"
          } `}
        >
          <Sidebar />
          <Outlet />
        </div>
        <HideSidebar />
      </div>
    </DashboardContext.Provider>
  );
}

export default DashboardLayout;
