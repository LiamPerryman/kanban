import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import AppLayout from "./features/AppLayout";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      className=" h-screen transition-all ease-in-out duration-300"
      router={router}
    ></RouterProvider>
  );
}
export default App;
