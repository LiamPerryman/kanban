import { MdOutlineSpaceDashboard } from "react-icons/md";
function CreateNewBoard() {
  return (
    <button className="flex  items-center text-mainPurple gap-5 text-headingXl">
      {" "}
      <MdOutlineSpaceDashboard size={35} />
      <h2>+ Create New Board</h2>
    </button>
  );
}

export default CreateNewBoard;
