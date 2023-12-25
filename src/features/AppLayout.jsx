import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./Navbar";
export const AppContext = createContext();

function AppLayout() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      <div className={`h-screen ${darkMode ? "bg-darkGrey" : "bg-white"}`}>
        <Navbar />

        <div>
          <Outlet />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default AppLayout;
