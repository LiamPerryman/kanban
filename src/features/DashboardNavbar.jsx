import { useContext } from "react";
import { DashboardContext } from "./DashboardLayout";
import { LogoDark, LogoLight } from "../utils/imageExport";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
function DashboardNavbar() {
  const { darkMode, setVisible, visible } = useContext(DashboardContext);
  const navigate = useNavigate();
  return (
    <div
      className={`h-dashboardTop  flex flex-row-reverse   ${
        darkMode ? " bg-darkGrey" : " bg-white"
      } `}
    >
      <div
        className={` h-full  w-9/12    border-b-[1px]  flex flex-row justify-between items-center px-6   ${
          darkMode ? " border-linesDark bg-darkGrey" : "border-linesLight bg-white"
        }  `}
      >
        <div className="w-full">
          <h1 className={` text-headingXl ${darkMode ? "text-white" : "text-black"} `}>
            Platform Launch
          </h1>
        </div>
        <div className="flex flex-row justify-end items-center  w-full gap-5">
          <Button text={"+ Add New Task"} type={"primary"} size={"lg"} />
          <div>
            <HiDotsVertical className={`text-mediumGrey hover:cursor-pointer`} size={25} />
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
