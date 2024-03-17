import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-[#182237] flex cursor-pointer gap-[18px] p-[18px] rounded-[20px] w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={20} />
      <div className="flex flex-col gap-[16px]">
        <span className="text-[13px]">Total Members</span>
        <span className="text-[20px] font-medium">5,300</span>
        <span className="text-[11px] font-extralight">
          <span className="text-[lime]">12% </span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
