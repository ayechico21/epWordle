import React from "react";
import { AppContext } from "./AppProvider";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const { gameStatus } = React.useContext(AppContext);
  const [toasts, setToasts] = React.useState(
    []
  ); /**store all toast notifications */

  /**if game ended, reset notifications */
  React.useEffect(() => {
    if (gameStatus === "end") setToasts([]);
  }, [gameStatus]);

  const addToast = (message, variant, action) => {
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant,
      action: action,
    };
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
