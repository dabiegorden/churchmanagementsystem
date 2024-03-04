import Image from "next/image";
import React from "react";
import userImage from "../../../public/assets/832.jpg";

const Transactions = () => {
  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px]">
      <h2 className="mb-[20px] font-extralight text-[#b7bac1]">
        Latest Donations
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  src={userImage}
                  alt="user image"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                Dabie Gorden
              </div>
            </td>
            <td>
              <span className={"status Pending"}>Pending</span>
            </td>
            <td>01/06/24</td>
            <td>$300</td>
          </tr>

          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  src={userImage}
                  alt="user image"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                Dabie Gorden
              </div>
            </td>
            <td>
              <span className="status Done">Done</span>
            </td>
            <td>01/06/24</td>
            <td>$300</td>
          </tr>

          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  src={userImage}
                  alt="user image"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                Dabie Gorden
              </div>
            </td>
            <td>
              <span className="status Cancelled">Cancelled</span>
            </td>
            <td>01/06/24</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
