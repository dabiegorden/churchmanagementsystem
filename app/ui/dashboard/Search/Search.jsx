import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[1opx] rounded-[10px] w-max pl-[10px] py-[10px]">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-white"
      />
    </div>
  );
};

export default Search;
