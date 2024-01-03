import { useContext, useEffect, useRef } from "react";
import Sidebar from "../features/Sidebar";
import { AppContext } from "../App";

function Dashboard() {
  const { visible, darkMode } = useContext(AppContext);
  const ref = useRef();
  useEffect(() => {
    if (!visible || visible) ref.current.scrollTo({ left: "100vh", behavior: "smooth" });
  }, [visible]);
  return (
    <div
      className={`grid grid-cols-4 relative transition-transform duration-700   w-screen     ${
        darkMode ? "bg-veryDarkGrey" : "bg-lightGreyLightBG"
      } ${!visible && "-translate-x-[25vw]"} `}
    >
      <Sidebar />
      <div
        className={`min-h-[calc(100vh-5.7rem)] col-start-2  col-span-3    justify-center overflow-x-scroll    items-center  gap-5   ${
          visible ? "w-[75vw] transition-all duration-1000   " : "w-screen"
        } `}
      >
        <div
          ref={ref}
          className=" flex flex-row  items-center h-full   overflow-x-scroll snap-x  snap-proximity  -z-10 p-5 gap-5 "
        >
          <div className="h-full min-w-96 bg-mediumGrey rounded-3xl opacity-30  snap-x"></div>
          <div className="h-full min-w-96 w-96 bg-mediumGrey rounded-3xl snap-start  opacity-30"></div>
          <div className="h-full min-w-96 w-96 bg-mediumGrey rounded-3xl  snap-start opacity-30"></div>
          <div className="h-full min-w-96 w-96 bg-mediumGrey rounded-3xl  snap-start opacity-30"></div>
          <div className="h-full min-w-96 w-96 bg-mediumGrey rounded-3xl  snap-start opacity-30"></div>
          <div className="h-full min-w-96 w-96 bg-mediumGrey rounded-3xl  snap-start opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
// ${
//   visible ? " col-start-2  col-span-3 " : " col-start-1 col-span-full  "
// }
export default Dashboard;
