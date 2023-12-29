import { useContext } from "react";
import { AppContext } from "../features/AppLayout";
import Button from "../features/Button";

function Home() {
  const { darkMode, clicked } = useContext(AppContext);
  return (
    <div
      className={`h-screen  w-full flex flex-col justify-center pattern-graph-mediumGrey/5  pattern-topography-scale-[.3]  items-center transition-none ${
        clicked && "hidden"
      } ${darkMode ? "bg-darkGrey" : "bg-white"}    `}
    >
      <div className="h-96 flex flex-col justify-center items-center">
        <header className="  sm:w-3/5 2xl:w-[900px] sm:p-0 px-4 w-full  text-center mb-10">
          <h1
            className={` 2xl:text-6xl xl:text-5xl  md:text-4xl text-lg min-[500px]:text-3xl  font-bold w-full text-center  leading-tight mb-8  ${
              darkMode ? "text-white" : "text-darkGrey"
            }`}
          >
            Create a board to keep track of your production efficiently.
          </h1>
          <h2 className={` sm:text-headingLg font-semibold text-x text-mediumGrey`}>
            A visual system used to manage and keep track of work as it moves through a process.
          </h2>
        </header>
        <div className="w-full gap-5 flex items-center justify-center">
          <Button text={"Get Started"} type={"primary"} size={"lg"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
