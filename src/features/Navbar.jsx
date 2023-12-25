import { useContext } from "react";
import { LogoDark, LogoLight } from "../utils/imageExport";
import { AppContext } from "./AppLayout";
import Button from "./Button";
import { MdOutlineDarkMode, MdSunny } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const navigate = useNavigate();
  const { setDarkMode, darkMode } = useContext(AppContext);
  return (
    <nav
      className={` flex flex-row items-center justify-between px-10 w-full h-dashboardTop border-b-[1px] ${
        darkMode ? " border-linesDark" : "border-linesLight"
      }`}
    >
      <img
        onClick={() => navigate("/dashboard")}
        className="hover:cursor-pointer"
        src={darkMode ? LogoLight : LogoDark}
        alt="Kanban Logo"
      />
      <div className="flex flex-row  items-center justify-center 2xl:w-4/12 xl:3/6 lg:w-3/6 max-[1024px]:hidden gap-5">
        <div className="flex w-full gap-5 ">
          <Button text={"Log In"} type={"secondary"} size={"sm"} />
          <Button text={"Create a board"} type={"primary"} size={"sm"} />
        </div>
        <div className=" h-12 w-[1px] bg-linesDark"></div>
        <div className={`flex justify-between items-center gap-1  `}>
          <div
            onClick={() => setDarkMode((dark) => !dark)}
            className={`hover:cursor-pointer  p-2 rounded-full   ${
              darkMode ? " hover:bg-linesDark" : "hover:bg-linesLight"
            }`}
          >
            {darkMode ? (
              <MdSunny size={"2rem"} className=" text-mediumGrey" />
            ) : (
              <MdOutlineDarkMode size={"2rem"} className="text-mediumGrey" />
            )}
          </div>
          <div
            className={`hover:cursor-pointer  p-2 rounded-full  ${
              darkMode ? " hover:bg-linesDark" : "hover:bg-linesLight"
            }`}
          >
            <Link to="https://github.com/LiamPerryman/kanban">
              {" "}
              <AiFillGithub size={"2rem"} className="text-mediumGrey" />
            </Link>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
}

export default Navbar;
