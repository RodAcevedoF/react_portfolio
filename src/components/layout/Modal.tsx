import { type ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "../../contexts";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { state, setState } = useModalContext();

  const closeModal = () => setState(false);
  const modalRoot = document.getElementById("modal");

  if (!state || !modalRoot) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-[var(--clear-secondary)] backdrop-blur-sm flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="bg-neutral-900 p-8 rounded-lg shadow-lg animate-[fade-in_0.3s_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button
          className="absolute top-2 right-4 text-[1rem] font-extrabold text-blue-500 hover:text-white cursor-pointer"
          onClick={closeModal}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>,
    modalRoot
  );
};
