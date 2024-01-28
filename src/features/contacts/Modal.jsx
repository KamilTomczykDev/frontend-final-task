import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed left-0 top-0 h-screen w-full bg-[#10125565] backdrop-blur"
    >
      <div className="bg-main-950 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-2 md:p-4">
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
