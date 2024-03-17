import Search from "@/app/ui/dashboard/Search/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImage from "../../../public/assets/832.jpg";

const Members = () => {
  return (
    <div className="p-[20px] mt-[10px] rounded-[20px] bg-[#182237]">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for member..."} />
        <Link href={"/admin-dashboard/Members/Add"}>
          <button className="px-4 py-2 bg-[#5d57c9] border-none rounded-md cursor-pointer text-white">
            Add
          </button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-[0.5rem]">
                <Image
                  src={userImage}
                  alt="member image"
                  className="object-cover rounded-full"
                  width={40}
                  height={40}
                />
                <p className="text-[#b7bac1]">Dabie Gorden</p>
              </div>
            </td>
            <td className="text-[#b7bac1]">dabie@gmail.com</td>
            <td className="text-[#b7bac1]">02/04/24</td>
            <td className="text-[#b7bac1]">Admin</td>
            <td className="text-[#b7bac1]">Active</td>
            <td>
              <div className="flex gap-[10px]">
                <Link href={"/"}>
                  <button className="py-[5px] px-[10px] rounded-[5px] text-white border-none cursor-pointer bg-teal-700">
                    View
                  </button>
                </Link>
                <button className="py-[5px] px-[10px] rounded-[5px] text-white border-none cursor-pointer bg-red-600">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Members;
