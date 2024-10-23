import React, { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { setSearchTerm } from "../../redux/ProductSlice";

const MobileSearchBar = ({ closeSearchHandle, openSearch }) => {
  const [showMenu, setShowMenu] = useState(false);

  ///Function For Search Items
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter");
  };

  useEffect(() => {
    if (openSearch) {
      setShowMenu(true);
    } else {
      // Delay the state change to allow for slide out effect
      const timer = setTimeout(() => setShowMenu(false), 300); // Match duration with CSS transition
      return () => clearTimeout(timer);
    }
  }, [openSearch]);

  return (
    <>
      {openSearch && (
        <div className="bg-black absolute bg-opacity-10 backdrop-blur-md h-[100%] top-0 right-0 w-full">
          <div
            className={`bg-white md:w-[400px]  absolute right-0 top-0 h-[100%] w-[250px] px-3 py-4   transition-transform duration-300 ease-in-out ${
              showMenu
                ? "transform translate-x-50"
                : "transform -translate-x-full" // Slide out to the left
            }`}
          >
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-[20px] font-bold">Search</h1>
              <RiCloseLargeLine
                className="md:text-[25px] text-[20px] cursor-pointer"
                onClick={closeSearchHandle}
              />
            </div>

            <div className=" flex items-center w-full bg-gray-50 rounded  shadow ">
              <input
                className=" border-none w-full px-4 bg-transparent outline-none"
                placeholder="Search Products..."
              />
              <span className="cursor-pointer font-[20px]">
                <CiSearch onSubmit={handleSearch} />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSearchBar;
