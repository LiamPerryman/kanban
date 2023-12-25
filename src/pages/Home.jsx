import { useContext } from "react";
import { AppContext } from "../features/AppLayout";
import Button from "../features/Button";
import Loader from "../features/Loader";

function Home() {
  const { darkMode } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center mt-28 ">
      <h1
        className={`text-[60px] font-bold w-[900px] text-center leading-tight mb-8  ${
          darkMode ? "text-white" : "text-darkGrey"
        }`}
      >
        Create a board to keep track of your production efficiently.
      </h1>
      <h2 className={` text-headingLg font-semibold  text-mainPurple  `}>
        A visual system used to manage and keep track of work as it moves through a process.
      </h2>
    </div>
  );
}

export default Home;
