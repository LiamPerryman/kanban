import { useContext, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import DeleteBoard from "./DeleteBoard";
import { AppContext } from "../App";
import useOnOutsideClick from "../hooks/useOnOutsideClick";
function EditDashboard() {
  const { darkMode } = useContext(AppContext);
  const [clicked, setClicked] = useState(true);
  const [deleteBoard, setDeleteBoard] = useState(false);
  const ref = useRef();
  function handleSetDeleteBoard() {
    setDeleteBoard(true);
    setClicked(false);
  }
  useOnOutsideClick(setClicked, ref);
  return (
    <div className="relative ">
      <HiDotsVertical
        onClick={() => setClicked((clicked) => !clicked)}
        className={`text-mediumGrey hover:cursor-pointer`}
        size={25}
      />

      <div
        ref={ref}
        className={` outline-5 outline  outline-mediumGrey/10 ${
          !clicked && "hidden"
        } absolute h-32 w-48 rounded-xl p-5 flex flex-col justify-center z-40 right-5 top-10  items-start gap-5 ${
          darkMode ? " bg-darkGrey" : "bg-white"
        } `}
      >
        <button className=" text-headingM text-mediumGrey">Edit Board</button>
        <button onClick={handleSetDeleteBoard} className=" text-headingM text-red">
          Delete Board
        </button>
      </div>

      {deleteBoard && <DeleteBoard setOpen={setDeleteBoard} />}
    </div>
  );
}

export default EditDashboard;
