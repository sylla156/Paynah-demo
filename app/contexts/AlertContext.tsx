"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import { Alert } from "../components/Alert";

interface AlertContextType {
  showAlert: (
    message: string,
    type: "success" | "error" | "info",
    duration?: number
  ) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error" | "info";
    duration?: number;
  } | null>(null);

  const showAlert = (
    message: string,
    type: "success" | "error" | "info",
    duration = 3000
  ) => {
    setAlert({ message, type, duration });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          duration={alert.duration}
          onClose={() => setAlert(null)}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
