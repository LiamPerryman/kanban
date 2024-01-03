import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import AppLayout from "./features/AppLayout";

import DashboardLayout from "./features/DashboardLayout";
import PageNotFound from "./pages/PageNotFound";
import { createContext, useMemo, useState } from "react";
export const AppContext = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [visible, setVisible] = useState(true);
  const [clicked, setClicked] = useState(false);
  const value = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      visible,
      setVisible,
      clicked,
      setClicked,
    }),
    [darkMode, visible, clicked]
  );
  return (
    <AppContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
export default App;
