import { Navigate, RouterProvider, createBrowserRouter, useParams } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import AppLayout from "./features/AppLayout";
import SignUp from "./pages/SignUp";
import DashboardLayout from "./features/DashboardLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        index: true,
        element: <Navigate to="/home" />,
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
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}
export default App;
