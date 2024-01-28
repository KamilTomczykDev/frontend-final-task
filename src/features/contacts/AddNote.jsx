import { useState } from "react";
import { MdNoteAdd } from "react-icons/md";

import Modal from "./Modal";
import AddNoteForm from "./AddNoteForm";

function AddNote({ id, fullName }) {
  const [isModal, setIsModal] = useState(false);

  function handleClick() {
    setIsModal(!isModal);
  }

  console.log(id);
  return (
    <>
      <button
        onClick={handleClick}
        className="transition duration-300 hover:opacity-60"
      >
        <MdNoteAdd size={20} color={"#e8861c"} />
      </button>
      {isModal && (
        <Modal onClose={handleClick}>
          <AddNoteForm id={id} fullName={fullName} />
        </Modal>
      )}
    </>
  );
}

export default AddNote;
