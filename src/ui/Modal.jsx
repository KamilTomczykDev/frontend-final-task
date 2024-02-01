import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";

function Modal({ children, onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed left-0 top-0 h-screen w-full bg-[#10125565] backdrop-blur"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-start justify-start gap-2 bg-main-950 p-2 md:p-4"
      >
        <button
          onClick={onClose}
          className="transition duration-300 hover:opacity-60"
        >
          <ImCross size={15} color={"#e8861c"} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
