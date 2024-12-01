import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
    if (isOpen == false) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 px-10 py-12 shadow-lg w-1/4 text-gray-200 border-2 border-yellow-400 rounded-2xl">
            { children }
          </div>
        </div>,
      document.getElementById("modal-root")
    );
}

export default Modal;