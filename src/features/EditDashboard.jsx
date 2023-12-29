import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Modal from "./Modal";
function EditDashboard() {
  const [clicked, setClicked] = useState(false);
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
          <button className=" text-headingM text-red">Delete Board</button>
        </div>
      </Modal>
    </div>
  );
}

export default EditDashboard;
