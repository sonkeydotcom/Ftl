import React, { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";
import { GiHearts } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";

const MobileNavBar = ({ closeMenuHandle, isOpen }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowMenu(true);
    } else {
      // Delay the state change to allow for slide out effect
      const timer = setTimeout(() => setShowMenu(false), 500); // Match duration with CSS transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="bg-black absolute bg-opacity-10 backdrop-blur-md h-full top-0 left-0 w-full">
          <div
            className={`bg-white md:w-[400px] top-0 h-full w-[250px] px-3 py-4 transition-transform duration-300 ease-in-out ${
              showMenu
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-[20px] font-bold">Menu</h1>
              <RiCloseLargeLine
                className="md:text-[25px] text-[20px] cursor-pointer"
                onClick={closeMenuHandle}
              />
            </div>
            <div className="flex justify-between items-center mt-2 flex-col">
              <ul className="w-full space-y-4 font-semibold text-[18px] cursor-pointer">
                <li className="flex items-center justify-between">
                  <span>New Arrivals</span>
                  <span>
                    <FaAngleRight />
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Top Sales</span>
                  <span>
                    <FaAngleRight />
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Best Collections</span>
                  <span>
                    <FaAngleRight />
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Men Collections</span>
                  <span>
                    <FaAngleRight />
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Female Collections</span>
                  <span>
                    <FaAngleRight />
                  </span>
                </li>
              </ul>
            </div>
            <div className="border-y-2 my-4 py-4 flex items-center">
              <BsPersonCircle className="mr-4" />
              <span className="text-[18px] font-semibold cursor-pointer">
                Login
              </span>
            </div>
            <div className="border-b-2 my-4 py-2 flex items-center">
              <IoPersonAddSharp className="mr-4" />
              <span className="text-[18px] font-semibold cursor-pointer">
                Create Account
              </span>
            </div>
            <div className="border-b-2 my-4 py-2 flex items-center">
              <GiHearts className="mr-4" />
              <span className="text-[18px] font-semibold cursor-pointer">
                My Wish List
              </span>
            </div>

            <div className="border-b-2 my-4 py-2 flex items-center">
              <IoLogoWhatsapp className="mr-4" />
              <span className="text-[18px] font-semibold cursor-pointer">
                Contact
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
