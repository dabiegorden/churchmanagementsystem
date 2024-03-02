"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { LuChurch } from "react-icons/lu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <nav className="bg-white px-12 fixed top-0 left-0 z-[1000] flex justify-between items-center w-full py-4 border-b border-b-gray-300">
        <div className="flex items-center gap-1">
          <LuChurch size={18} color="blue" />
          <Link href={"/"} className="text-xl">
            Church
          </Link>
        </div>
        <div className="flex gap-12">
          <li className="flex gap-12">
            <Link className="links" href={"/"}>
              Home
            </Link>
            <Link className="links" href={"/About"}>
              About
            </Link>
            <Link className="links" href={"/Sermons"}>
              Sermons
            </Link>
            <Link className="links" href={"/Events"}>
              Events
            </Link>
            <Link className="links" href={"/Donate"}>
              Donate
            </Link>
          </li>
        </div>

        <div className="flex items-center gap-12">
          <div className="bg-blue-600 px-4 py-[0.5rem] text-white text-[1.05rem] rounded-md hover:bg-gradient-to-tr from-orange-600 to-blue-600 transition duration-300 ease-in-out">
            <Link href={"/Sign-up"}>Sign Up</Link>
          </div>

          <div className="hidden">
            {menu ? (
              <IoClose
                className="cursor-pointer"
                size={24}
                onClick={() => setMenu(false)}
              />
            ) : (
              <RiMenu3Fill
                className="cursor-pointer"
                size={24}
                onClick={() => setMenu(true)}
              />
            )}
            {menu && (
              <div className="slideInRight">
                <li>
                  <Link className="links" href={"/"}>
                    Home
                  </Link>
                  <Link className="links" href={"/About"}>
                    About
                  </Link>
                  <Link className="links" href={"/Sermons"}>
                    Sermons
                  </Link>
                  <Link className="links" href={"/Events"}>
                    Events
                  </Link>
                  <Link className="links" href={"/Donate"}>
                    Donate
                  </Link>
                </li>
                <div className="bg-blue-700 px-4 py-[0.5rem] text-white text-[1.05rem] rounded-md hover:bg-gradient-to-tr from-orange-600 to-blue-600 transition duration-300 ease-in-out">
                  <Link href={"/"}>Sign Up</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
