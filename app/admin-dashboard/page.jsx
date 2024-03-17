import React from "react";
import Card from "../ui/dashboard/Card/Card";
import Transactions from "../ui/dashboard/Transactions/Transactions";
import RightSideBar from "../ui/dashboard/RightSideBar/RightSideBar";
import Chat from "../ui/dashboard/Chat/Chat";

const Admindashboard = () => {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex-[3] flex flex-col gap-[18px]">
        <div className="flex justify-between gap-[18px]">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chat />
      </div>
      <div className="flex-[1]">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Admindashboard;
