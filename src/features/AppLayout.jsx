import { Outlet } from "react-router-dom";
import { LogoDark } from "../utils/imageExport";

function AppLayout() {
  return (
    <div className=" h-screen">
      <div>
        <img src={LogoDark} alt="" />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
