import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { createContext, useState } from "react";

import DashboardNavbar from "./DashboardNavbar";

export const DashboardContext = createContext();

function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const [visible, setVisible] = useState(true);
  return (
    <DashboardContext.Provider
      value={{
        darkMode,
        setDarkMode,
        visible,
        setVisible,
      }}
    >
      <div className={`h-[calc(100svh-5.7rem)]  ${darkMode ? "bg-veryDarkGrey" : "bg-white"}`}>
        <DashboardNavbar />
        <div className={`h-full  flex flex-row ${darkMode ? "bg-veryDarkGrey" : "bg-white"}   `}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </DashboardContext.Provider>
  );
}

export default DashboardLayout;
