import { useContext } from "react";
import Button from "./Button";
import Window from "./Window";
import { AppContext } from "../App";

function DeleteBoard({ setOpen }) {
  const { darkMode } = useContext(AppContext);
  return (
    <Window setOpen={setOpen}>
      <div
        className={`h-deleteHeight max-sm:h-96 w-deleteWidth  max-sm:max-w-72 max-sm:text-center ${
          darkMode ? " bg-darkGrey" : "bg-white"
        } px-6 rounded-2xl  flex flex-col gap-5 justify-center`}
      >
        <h1 className="text-red text-headingLg">Delete this Board?</h1>
        <p className=" text-bodyLg text-wrap  text-mediumGrey ">
          Are you sure you want to delete the {`Platform launch`} board? This action will remove all
          columns and tasks and cannot be reversed.
        </p>

        <div className="flex flex-row max-sm:flex-col  gap-5">
          <Button text={"Delete"} />
          <Button onClick={() => setOpen(false)} text={"Cancel"} type={"secondary"} />
        </div>
      </div>
    </Window>
  );
}

export default DeleteBoard;
