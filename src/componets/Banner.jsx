import React from "react";
import bannerImg3 from "../assets/images/p3.jpg";
import bannerimg2 from "../assets/images/Tops/saint.webp";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center  ">
      <div className=" text-black md:absolute  top-96  md:mt-10  md:top-96 md:left-20 text-center">
        <h2 className="px-20   text-gray-600 md:bg-black py-1   font-bold text-2xl  md:text-white text-center">
          New Arrivals
        </h2>

        <div class="flex items-center justify-center">
          <div class="relative group">
            <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span class="absolute  rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span class="  block px-6 py-3 rounded-xl bg-gray-950">
                <div class="  flex items-center space-x-2">
                  <span class="transition-all duration-500 group-hover:translate-x-1">
                    Shop Now
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={bannerimg2} className="w-full md:h-screen" />
      </div>
    </div>
  );
};

export default Banner;
