import { useContext } from "react";

import { LogoDark, LogoLight } from "../utils/imageExport";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EditDashboard from "./EditDashboard";
import { AppContext } from "../App";
import { FaPlus } from "react-icons/fa";

function DashboardNavbar() {
  const { darkMode, visible } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      className={`h-dashboardTop w-screen  flex flex-row-reverse   ${
        darkMode ? " bg-darkGrey" : " bg-white"
      } `}
    >
      <div
        className={` h-full  w-9/12  max-lg:w-full   border-b-[1px]  flex flex-row justify-between items-center px-6 gap-5  ${
          darkMode ? " border-linesDark bg-darkGrey" : "border-linesLight bg-white"
        }  `}
      >
        <div className="w-full">
          <h1
            className={` text-headingXl max-sm:text-headingLg  ${
              darkMode ? "text-white" : "text-black"
            } `}
          >
            Platform Launch
          </h1>
        </div>
        <div className="flex flex-row justify-end items-center  w-full max-sm:w-32  gap-5">
          <div className="max-sm:hidden w-full flex flex-row justify-end  ">
            <Button text={"+ Add New Task"} type={"primary"} size={"sm"} />
          </div>
          <div className="sm:hidden w-full">
            <Button text={<FaPlus size={15} />} type={"primary"} size={"sm"} />{" "}
          </div>

          <div>
            <EditDashboard />
          </div>
        </div>
      </div>
      <div
        className={`flex max-lg:hidden min-w-96   w-[25vw]   h-full justify-start items-center border-r-[1px] transition-none px ${
          !visible && "border-b-[1px]"
        }  px-8    ${darkMode ? " border-linesDark " : "border-linesLight"}`}
      >
        <img
          className="hover:cursor-pointer"
          onClick={() => navigate("/")}
          src={darkMode ? LogoLight : LogoDark}
          alt=""
        />
      </div>
    </div>
  );
}

export default DashboardNavbar;
