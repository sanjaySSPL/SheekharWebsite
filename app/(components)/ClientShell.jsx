"use client";
import React, { useState } from "react";
import { AnimationProvider } from "./AnimationContext";
import Navbar1 from "./Navbar1";
import ExportOverlay from "./ExportOverlay";

const ClientShell = ({ children }) => {
  const [showExportOverlay, setShowExportOverlay] = useState(false);
  return (
    <AnimationProvider>
      <ExportOverlay show={showExportOverlay} onClose={() => setShowExportOverlay(false)} />
      <Navbar1 setShowExportOverlay={setShowExportOverlay} />
      {children}
    </AnimationProvider>
  );
};

export default ClientShell; 