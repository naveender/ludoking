import React,{ useEffect } from "react";

const toastTypes = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-blue-500 text-white",
};

const Toast = ({
  message,
  type = "info",
  onClose,
  duration = 3000,
  show = false,
}) => {
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-4 py-3 rounded shadow-lg flex items-center gap-2 min-w-[200px] ${toastTypes[type]}`}
    >
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Toast;
