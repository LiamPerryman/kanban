import Button from "./Button";
import Modal from "./Modal";
import Overlay from "./Overlay";

function DeleteBoard() {
  return (
    <Modal>
      <Overlay>
        <div className=" h-deleteHeight w-deleteWidth  bg-white px-6 rounded-2xl  flex flex-col gap-5 justify-center">
          <h1 className="text-red text-headingLg">Delete this Board?</h1>
          <p className=" text-bodyLg text-mediumGrey ">
            Are you sure you want to delete the {`Platform launch`} board? This action will remove
            all columns and tasks and cannot be reversed.
          </p>

          <div className="flex flex-row gap-5">
            <Button text={"Delete"} />
            <Button text={"Cancel"} type={"secondary"} />
          </div>
        </div>
      </Overlay>
    </Modal>
  );
}

export default DeleteBoard;
