import { Outlet, useLocation } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./Navbar";

export const AppContext = createContext();

function AppLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const { pathname } = useLocation();
  const [clicked, setClicked] = useState(false);
  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        pathname,
        clicked,
        setClicked,
      }}
    >
      <div
        className={`h-svh ${clicked && "overflow-hidden"}  ${
          darkMode ? "bg-darkGrey" : "bg-white"
        } `}
      >
        <Navbar />

        <Outlet />
      </div>
    </AppContext.Provider>
  );
}

export default AppLayout;
