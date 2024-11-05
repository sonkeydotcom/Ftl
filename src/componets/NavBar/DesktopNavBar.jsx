import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsPersonCircle } from "react-icons/bs";

const DesktopNavBar = ({
  openMenuHandle,
  openSearchHandle,
  handleCartOpen,
  handleLoginOpen,
}) => {
  const totalQuantity = useSelector((state) => state.cart.product);

  return (
    <div className="flex  justify-between items-center  w-full bg-white z-10 md:px-2  h-[60px] md:h-[80px]">
      <div className="flex  items-center md:space-x-8">
        <BiMenuAltLeft
          className="text-[35px] cursor-pointer"
          onClick={openMenuHandle}
        />

        <BsPersonCircle
          className="md:text-[30px] text-[20px] cursor-pointer"
          onClick={handleLoginOpen}
        />
      </div>
      <div className="bg-white ">
        <Link to="/">
          {" "}
          <h1 className="md:text-[40px] text-[20px] text-center name font-bold">
            FEEL THE LIFESTYLE
          </h1>
        </Link>
      </div>
      <div className="flex md:space-x-4 space-x-2 items-center ">
        <span>
          <IoLogoWhatsapp className="md:text-[30px] text-[18px] cursor-pointer hidden md:block" />
        </span>
        <span>
          <CiSearch
            className="md:text-[30px] text-[18px] cursor-pointer"
            onClick={openSearchHandle}
          />
        </span>
        <span className="flex items-center ">
          <Link to="">
            <GiShoppingCart
              className="md:text-[30px] text-[18px] cursor-pointer"
              onClick={handleCartOpen}
            />
          </Link>

          {totalQuantity.length > 0 && (
            <span className="text-red-500 font-bold text-xl">
              {totalQuantity.length}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default DesktopNavBar;
