import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ease-in-out ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`bg-white rounded-lg p-6 w-full max-w-md relative transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        <h2 className="text-2xl text-center text-red-600 font-semibold mb-4">
          {title}
        </h2>
        <div>{children}</div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Close
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
