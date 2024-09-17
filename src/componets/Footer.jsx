import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="">
      <div className="bg-black py-12 flex flex-col md:flex-row justify-between items-center px-10  text-white">
        <div className="  text-center mb-6">
          <h2 className="text-1xl">Join Our Community</h2>
          <p className="text-xs mt-2">
            Be the first to get the latest updates on our promotion campaigns,
            products and services
          </p>
        </div>
        <div className="flex items-center">
          <form>
            <div className="w-full">
              <input
                placeholder="Enter Your Email"
                type="email"
                required
                className=" border-0 rounded-lg mx-2 text-center placeholder-custom-size"
              />
              <button className="">Join</button>
            </div>
          </form>
        </div>
      </div>

      <div className=" py-8 md:px-20 flex justify-between flex-col-reverse items-center md:flex-row ">
        <div>
          <h3 className="font-semibold text-gray-400">Explore</h3>
          <ul className="text-sm ">
            <li className="font-bold mb-2">About</li>
            <li className="font-bold mb-2">Contact</li>
            <li className="font-bold mb-2">FAQs</li>
            <li className="font-bold mb-2">Shipping</li>
            <li className="font-bold mb-2">Exchange and Return Policy</li>
            <li className="font-bold mb-2">Terms of Service</li>
          </ul>
        </div>
        <hr className=" mb-6 border-black w-full block md:hidden" />
        <div className=" mb-3 ">
          <h1>Coutntry selections</h1>
          <div className="mt-3 mb-3">
            <p className="font-semibold">Track order</p>
            <form className="flex flex-col md:flex-row">
              <input placeholder="enter tracking number" />
              <button className="bg-black text-white px-4 mt-1 md:mt-0 py-1 rounded shadow">
                Track
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className=" mb-6 border-black w-full" />
      <div className="flex  items-center flex-col mb-2 md:flex-row md:px-20 ">
        <div className=" flex  gap-4 ">
          <FaInstagram className="text-2xl" />
          <CiFacebook className="text-2xl" />
          <FaWhatsapp className="text-2xl" />
          <FaXTwitter className="text-2xl" />
        </div>
      </div>
      <div className="bg-black text-white items-center flex justify-center md:justify-start md:px-20 md:py-1 text-center">
        <p className="text-2xl mr-2">&copy; </p>
        <p>2024. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
