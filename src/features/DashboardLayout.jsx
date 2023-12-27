import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { createContext, useContext, useState } from "react";
import Button from "./Button";
import DashboardNavbar from "./DashboardNavbar";

export const DashboardContext = createContext();

function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
    <DashboardContext.Provider
      value={{
        darkMode,
        setDarkMode,
        visible,
        setVisible,
      }}
    >
      <div
        className={`h-screen w-screen overflow-hidden ${darkMode ? "bg-veryDarkGrey" : "bg-white"}`}
      >
        <DashboardNavbar />
        <div className="w-screen flex flex-row">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </DashboardContext.Provider>
  );
}

export default DashboardLayout;
