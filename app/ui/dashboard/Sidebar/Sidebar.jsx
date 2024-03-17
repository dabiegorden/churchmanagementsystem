import React from "react";
import { menuItems } from "@/app/constant";
import MenuLinks from "./menuLinks/MenuLinks";
import Image from "next/image";
import userImage from "../../../../public/assets/832.jpg";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sticky top-[40px]">
      <div className="flex items-center gap-[20px] mb-[20px]">
        <Image
          className="rounded-full object-cover cursor-pointer"
          src={userImage}
          alt="User Image"
          width={50}
          height={50}
        />
        <div className="flex flex-col cursor-pointer">
          <span className="font-medium">Dabie Gorden</span>
          <span className="text-[12px] text-[#b7bac1]">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((categories) => (
          <li key={categories.title}>
            <span className="text-[#b7bac1] font-bold text-[13px] mx-0 my-[10px]">
              {categories.title}
            </span>
            {categories.list.map((item) => (
              <MenuLinks item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="p-[20px] mx-0 my-[5px] flex items-center gap-[10px] cursor-pointer rounded-[10px] bg-none border-none w-full text-white hover:bg-[#2e374a]">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
