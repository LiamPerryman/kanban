import { useContext, useEffect, useRef } from "react";
import Sidebar from "../features/Sidebar";
import { AppContext } from "../App";
import Button from "../features/Button";

function Dashboard() {
  const { visible, darkMode } = useContext(AppContext);
  const ref = useRef();
  const handleScroll = (event) => {
    const scrollAmount = event.deltaY;
    ref.current.scrollTo({
      left: ref.current.scrollLeft + scrollAmount,
    });
  };
  useEffect(() => {
    if (!visible || visible) ref.current.scrollTo({ left: "100vw" });
  }, [visible]);
  return (
    <div
      className={`flex flex-row relative transition-transform duration-700   w-screen     ${
        darkMode ? "bg-veryDarkGrey" : "bg-lightGreyLightBG"
      } ${!visible && "lg:-translate-x-96"} `}
    >
      <Sidebar />
      <div
        className={`min-h-[calc(100vh-5.7rem)] flex 3     ${
          visible ? "w-[75vw] transition-all duration-1000   " : "w-screen"
        } `}
      >
        <div
          ref={ref}
          onWheel={handleScroll}
          className=" flex flex-row   items-center  w-full  h-full overflow-x-scroll scrollbar scrollbar-track-lightGreyLightBG/5 scrollbar-thumb-mediumGrey scrollbar-thumb-rounded-full snap-x    p-5 gap-5 "
        >
          {
            <div className="flex flex-col text-center  justify-center items-center w-full gap-10">
              <h1 className={` text-headingXl text-mediumGrey`}>
                This board is empty. Create a new column to get started
              </h1>
              <Button type={"primary"} text={"+ Add New Column"} size={"lg"} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
// ${
//   visible ? " col-start-2  col-span-3 " : " col-start-1 col-span-full  "
// }
export default Dashboard;
