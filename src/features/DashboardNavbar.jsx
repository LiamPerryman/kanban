import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "./DashboardLayout";
import { LogoDark, LogoLight } from "../utils/imageExport";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EditDashboard from "./EditDashboard";

function DashboardNavbar() {
  const [windowSize, setWindowSize] = useState(800);
  const { darkMode, setVisible, visible } = useContext(DashboardContext);
  const navigate = useNavigate();
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={`h-dashboardTop  flex flex-row-reverse   ${
        darkMode ? " bg-darkGrey" : " bg-white"
      } `}
    >
      <div
        className={` h-full  w-9/12  max-lg:w-full   border-b-[1px]  flex flex-row justify-between items-center px-6 gap-5  ${
          darkMode ? " border-linesDark bg-darkGrey" : "border-linesLight bg-white"
        }  `}
      >
        <div className="w-full">
          <h1 className={` text-headingXl ${darkMode ? "text-white" : "text-black"} `}>
            Platform Launch
          </h1>
        </div>
        <div className="flex flex-row justify-end items-center  w-full max-sm:w-32 gap-5">
          <Button text={windowSize > 700 ? "+ Add New Task" : "+"} type={"primary"} size={"sm"} />
          <div>
            <EditDashboard />
          </div>
        </div>
      </div>
      <div
        className={`flex max-lg:hidden  w-3/12   h-full justify-start items-center border-r-[1px] transition-none px ${
          !visible && "border-b-[1px]"
        }  px-8    ${darkMode ? " border-linesDark " : "border-linesLight"}`}
      >
        <img
          className="hover:cursor-pointer"
          onClick={() => navigate("/home")}
          src={darkMode ? LogoLight : LogoDark}
          alt=""
        />
      </div>
    </div>
  );
}

export default DashboardNavbar;
