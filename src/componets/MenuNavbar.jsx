import React from "react";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import SearchPage from "../pages/SearchPage";
const MenuNavbar = () => {
  return (
    <div className="block md:hidden menu-navbar show">
      <div className=" bg-black text-white flex-col  top-12  left-0 w-full flex px-4 py-4 items-start uppercase">
        <div className="w-full ">
          <SearchPage />
        </div>
        <hr className="mb-8 mt-8 border-white w-full" />
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:hidden items-center px-0 mb-5 md:px-2 cursor-pointer">
            <ul className="flex flex-col cursor-pointer  text-sm">
              <li className=" md:px-4 mb-4 md:mb-0">Top sales</li>
              <li className=" md:px-4 mb-4 md:mb-0">New Arrivals</li>
              <li className=" md:px-4 mb-4 md:mb-0">Men</li>
              <li className=" md:px-4 mb-4 md:mb-0">Women</li>
              <li className=" md:px-4 mb-4 md:mb-0">Collection</li>
            </ul>
          </div>
        </div>
        <hr className=" mb-6 border-white w-full" />
        <div>
          <div className=" flex-col flex md:hidden items-start ">
            <button className="mb-3 font-bold ">Login</button>
            <button className="font-bold">Sign Up</button>
          </div>
        </div>
        <hr className="mb-6 mt-8 border-white w-full" />
        <div className="uppercase">
          <p className="mt-2">About</p>
          <p className="mt-2">Contact</p>
          <p className="mt-2">Faq</p>
          <p className="mt-2">Policies</p>
        </div>
        <hr className="mb-8 mt-8 border-white w-full" />
        <div className="">
          <p>Socials</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <FaInstagram className="text-2xl" />
            <CiFacebook className="text-2xl" />
            <FaWhatsapp className="text-2xl" />
            <FaXTwitter className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
