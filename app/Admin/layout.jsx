import React from "react";
import Sidebar from "../dashboard/Sidebar/Sidebar";
import Nav from "../dashboard/Navbar/Nav";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#151c2c]  flex text-white">
      <div className="flex-1 bg-[#182237] p-[20px]">
        <Sidebar />
      </div>

      <div className="flex-[4] p-[20px]">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
