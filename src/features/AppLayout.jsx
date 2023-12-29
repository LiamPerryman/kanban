import { Outlet, useLocation } from "react-router-dom";
import { createContext, useMemo, useState } from "react";
import Navbar from "./Navbar";

export const AppContext = createContext();

function AppLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const { pathname } = useLocation();
  const [clicked, setClicked] = useState(false);
  return (
    <AppContext.Provider
      value={useMemo(
        () => ({
          darkMode,
          setDarkMode,
          pathname,
          clicked,
          setClicked,
        }),
        [clicked, darkMode, pathname]
      )}
    >
      {" "}
      <Navbar />
      <Outlet />
    </AppContext.Provider>
  );
}

export default AppLayout;
