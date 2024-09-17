import React from "react";
import { CiSearch } from "react-icons/ci";
const SearchPage = () => {
  return (
    <div className="w-full flex items-center">
      <input
        placeholder="Search Item"
        className="w-full pl-5  h-10 rounded-lg md:h-20"
      />
      <CiSearch className="text-3xl  cursor-pointer absolute right-10 text-black" />
    </div>
  );
};

export default SearchPage;
