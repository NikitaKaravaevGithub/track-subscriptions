import React from "react";
import type { GlobalProvider } from "@ladle/react";
import "../index.css";

export const Provider: GlobalProvider = ({ children }) => (
  <div className="p-4">{children}</div>
);
