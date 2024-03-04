import Image from "next/image";
import React from "react";
import riImage from "../../../public/assets/bg_image.png";
import Link from "next/link";
import { CgMail } from "react-icons/cg";

const RightSideBar = () => {
  return (
    <div className="containers">
      <div className="relative py-[10px] px-[10px] rounded-[10px] mb-[20px] bg-gradient-to-r from-[#182237] to-[#253352]">
        <div className="bgContainer">
          <Image
            src={riImage}
            alt="rightsidebar_image"
            fill
            className="object-contain opacity-[0.2]"
          />
        </div>
        <div className="text">
          <span className="notification">Have any issues?</span>
          <h3 className="title">Contact the admin</h3>
          <span className="subtitle">(+233-599-49-55-08)</span>
          <span className="subtitle">church@gmail.com</span>
          <p className="desc">
            The admin is here to help in any issues concerning this system, such
            as how to ask for a prayer request or donations.
          </p>
          <Link href={"/"} className="button">
            <CgMail />
            Message
          </Link>
        </div>
      </div>

      <div className="relative py-[10px] px-[10px] rounded-[10px] mb-[20px] bg-gradient-to-r from-[#182237] to-[#253352]">
        {/* <div className="bgContainer">
          <Image src={riImage} alt="rightsidebar_image" fill className="" />
        </div> */}
        <div className="text">
          <span className="notification">Have any issues?</span>
          <h3 className="title">Contact the admin</h3>
          <span className="subtitle">(+233-599-49-55-08)</span>
          <span className="subtitle">church@gmail.com</span>
          <p className="desc">
            The admin is here to help in any issues concerning this system, such
            as how to ask for a prayer request or donations.
          </p>
          <Link href={"/"} className="button">
            <CgMail />
            Message
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
