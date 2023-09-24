import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant, action) => {
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant,
      action: action,
    };
    console.log(newToast);
    setToasts((cur) => [...cur, newToast]);
  };

  const removeToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
