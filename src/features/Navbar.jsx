import { useContext } from "react";
import { LogoDark, LogoLight } from "../utils/imageExport";
import { AppContext } from "./AppLayout";

import { MdOutlineDarkMode, MdSunny } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import NavbarButtons from "./NavbarButtons";

function Navbar() {
  const navigate = useNavigate();
  const { setDarkMode, darkMode } = useContext(AppContext);
  const { pathname } = useContext(AppContext);

  const loginPage = pathname.includes("login");
  return (
    <nav
      className={`relative   flex flex-row items-center justify-between px-10 w-full h-dashboardTop border-b-[1px]  ${
        darkMode ? " border-linesDark" : "border-linesLight"
      }  ${loginPage && "border-none"}  `}
    >
      <img
        onClick={() => navigate("/dashboard")}
        className="hover:cursor-pointer  z-30"
        src={darkMode ? LogoLight : LogoDark}
        alt="Kanban Logo"
      />
      {!loginPage && (
        <>
          {" "}
          <div className=" flex flex-row  items-center justify-center 2xl:w-4/12 xl:3/6 lg:w-3/6 max-[1024px]:hidden gap-5">
            <NavbarButtons CSS={" flex justify-end w-full gap-5 "} />
            <div className=" h-12 w-[1px] bg-linesDark"></div>
            <div className={`flex justify-between items-center gap-5  `}>
              <div
                onClick={() => setDarkMode((dark) => !dark)}
                className={`hover:cursor-pointer   rounded-full   ${
                  darkMode ? " hover:bg-linesDark" : "hover:bg-linesLight"
                }`}
              >
                {darkMode ? (
                  <MdSunny size={"2.5rem"} className=" text-mediumGrey" />
                ) : (
                  <MdOutlineDarkMode size={"2.5rem"} className="text-mediumGrey" />
                )}
              </div>
              <div
                className={`hover:cursor-pointer   rounded-full  ${
                  darkMode ? " hover:bg-linesDark" : "hover:bg-linesLight"
                }`}
              >
                <Link to="https://github.com/LiamPerryman/kanban">
                  {" "}
                  <AiFillGithub size={"2.5rem"} className="text-mediumGrey" />
                </Link>
              </div>
            </div>
          </div>
          <MobileNavbar />
        </>
      )}
    </nav>
  );
}

export default Navbar;
