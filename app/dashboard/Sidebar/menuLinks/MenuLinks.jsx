"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLinks = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-[15px] flex items-center gap-[8px] hover:bg-[#2e374a] ${
        pathname === item.path && "bg-[#2e374a]"
      } m-[5px] rounded-[10px]`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLinks;
