import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black pt-5 pb-2 px-3 md:px-4">
      <div className="bg-white flex flex-col">
        <div className="bg-white flex flex-col md:flex-row px-[30px] justify-between mb-5 border-black border-b-[1px] mb:border-b-[0px]">
          {/* Contact Section */}
          <div className="p-4 flex flex-col md:w-[25%] w-full md:border-r-[1px] border-black md:border-b-0 border-b-2">
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="mb-2 text-[14px] text-gray-500 underline">
              ago palace tinubu lagos startime estate isolo
            </p>
            <p className="mb-2 text-[14px] text-gray-500 hover:underline">
              Operating hours: Monday – Saturday (10am -10pm)
            </p>
            <p className="mb-2 text-[14px] text-gray-500 hover:underline">
              Sunday (12pm-10pm)
            </p>
            <p className="mb-2 text-[14px] text-gray-500 hover:underline">
              08169084535
            </p>
          </div>

          {/* Shop Here Section */}
          <div className="p-4 flex flex-col md:w-[25%] w-full md:border-r-[1px] border-black md:border-b-0 border-b-2">
            <h4 className="font-bold mb-2">Shop Here</h4>
            <ul>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                All Items
              </li>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                Men
              </li>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                Female
              </li>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                Collections
              </li>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                Accessories
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="p-4 flex flex-col md:w-[25%] w-full md:border-r-[1px] border-black md:border-b-0 border-b-2">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                All Items
              </li>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                Men
              </li>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                Female
              </li>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                Collections
              </li>
              <li className="mb-2 text-[14px] text-gray-500 hover:underline">
                Accessories
              </li>
            </ul>
          </div>

          {/* Discount/Newsletter Section */}
          <div className="p-4 flex flex-col md:w-[25%] w-full">
            <p className="font-bold mb-4">Get Discount off your Next Order</p>
            <form className="flex-col flex">
              <input
                type="text"
                placeholder="Name"
                className="border-b-[1px] border-black py-2 mb-4 focus:outline-none focus:ring-0"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b-[1px] border-black py-2 mb-4 focus:outline-none focus:ring-0"
              />
              <button className="bg-black text-white py-4 cursor-pointer my-4">
                Subscribe To Our Newsletter
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-between px-4">
          <div>
            <p className="text-[14px] text-gray-500 hover:underline">
              © 2024 FTL All Rights Reserved
            </p>
          </div>
          <div>logogogo</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
