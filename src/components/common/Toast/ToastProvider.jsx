"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "info",
    duration: 3000,
  });

  const showToast = useCallback((message, type = "info", duration = 3000) => {
    setToast({ show: true, message, type, duration });
  }, []);

  const handleClose = () => setToast((t) => ({ ...t, show: false }));

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        duration={toast.duration}
        onClose={handleClose}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
