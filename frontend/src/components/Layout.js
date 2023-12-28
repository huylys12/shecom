import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-auto h-screen">
        <div className="grow">
          <Navbar />
          <div className="m-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
