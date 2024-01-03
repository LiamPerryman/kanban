import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Modal from "./Modal";
import DeleteBoard from "./DeleteBoard";
function EditDashboard() {
  const [clicked, setClicked] = useState(false);
  const [deleteBoard, setDeleteBoard] = useState(false);
  function handleSetDeleteBoard() {
    setDeleteBoard(true);
    setClicked(false);
  }
  return (
    <div className="relative">
      <HiDotsVertical
        onClick={() => setClicked((clicked) => !clicked)}
        className={`text-mediumGrey hover:cursor-pointer`}
        size={25}
      />

      <Modal>
        <div
          className={`${
            !clicked && "hidden"
          } absolute right-12 top-0 translate-y-20 h-32 w-48 rounded-xl p-5 flex flex-col justify-center  items-start gap-5 bg-linesLight`}
        >
          <button className=" text-headingM text-mediumGrey">Edit Board</button>
          <button onClick={handleSetDeleteBoard} className=" text-headingM text-red">
            Delete Board
          </button>
        </div>
      </Modal>
      {deleteBoard && <DeleteBoard />}
    </div>
  );
}

export default EditDashboard;
