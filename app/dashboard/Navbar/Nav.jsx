"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center p-[20px] bg-[#182237] rounded-[10px]">
      <div className="text-[#b7bac1] font-bold capitalize">
        {pathname.split("/").pop()}
      </div>

      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-[10px]">
          <MdSearch />
          <input
            className="border-none outline-none bg-transparent text-white cursor-pointer"
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-[20px] cursor-pointer">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
