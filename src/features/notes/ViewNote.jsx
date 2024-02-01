import { useState } from "react";
import { PiNoteFill } from "react-icons/pi";
import Modal from "../contacts/Modal";

function ViewNote({ note }) {
  const [isModal, setIsModal] = useState(false);

  function handleClick() {
    setIsModal(!isModal);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center transition duration-300 hover:opacity-60"
      >
        <PiNoteFill size={20} color={"#e8861c"} />
      </button>
      {isModal && (
        <Modal onClose={handleClick}>
          <div className="max-w-[600px] font-semibold text-white">{note}</div>
        </Modal>
      )}
    </>
  );
}

export default ViewNote;
