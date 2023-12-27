import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./AppLayout";
import NavbarButtons from "./NavbarButtons";

function MobileMenu() {
  const { clicked, setClicked, darkMode } = useContext(AppContext);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) setClicked(false);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    clicked && (
      <div
        className={`fixed h-screen z-10  flex flex-col min-[1024px]:hidden inset-0    ${
          darkMode ? "bg-darkGrey" : "bg-white"
        }  `}
      >
        <div className="h-full  flex justify-start items-start translate-y-32  px-5">
          <ul className="flex flex-col gap-5">
            <li
              className={` border-b-2 pb-5  ${
                darkMode ? " border-linesDark" : "border-linesLight"
              }`}
            >
              <NavLink
                to={"/"}
                className={`text-headingXl   transition-colors ease-in-out duration-300 ${
                  darkMode
                    ? "text-white  hover:text-mainPurple "
                    : "text-mainPurple hover:text-linesDark "
                } `}
              >
                Home
              </NavLink>
            </li>
            <li
              className={` w-full border-b-2 pb-5   ${
                darkMode ? " border-linesDark" : "border-linesLight"
              }`}
            >
              {" "}
              <NavLink
                to={"/dashboard"}
                className={`text-headingXl transition-colors ease-in-out duration-300   ${
                  darkMode
                    ? "text-white  hover:text-mainPurple"
                    : "text-mainPurple  hover:text-linesDark"
                }  `}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`absolute flex h-20 px-5 flex-row w-full justify-center items-center ${
            darkMode ? "bg-white" : "bg-darkGrey"
          } bottom-0  `}
        >
          <NavbarButtons CSS={" flex justify-center w-full gap-5 "} />
        </div>
      </div>
    )
  );
}

export default MobileMenu;
