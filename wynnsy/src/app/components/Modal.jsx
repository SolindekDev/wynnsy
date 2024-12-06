"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    let root = document.querySelector("#modal-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "modal-root";
      document.body.appendChild(root);
    }
    setModalRoot(root);

    // Cleanup on unmount
    return () => {
      if (root && root.parentNode === document.body) {
        document.body.removeChild(root);
      }
    };
  }, []);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-zinc-900 px-10 py-12 shadow-lg w-1/4 text-gray-200 border-2 border-yellow-400 rounded-2xl">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
