import React from "react";
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-black">{children}</div> {/* Removed pt-16 */}
    </>
  );
};

export default AppLayout;

