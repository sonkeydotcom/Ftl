import React from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { WiDirectionRight } from "react-icons/wi";
import ftl from "./ftlimg.jpg";
import { motion } from "framer-motion";

const MainBanner = () => {
  return (
    <motion.div className="">
      {/* left div */}
      <div className="flex flex-col md:flex-row justify-between items-center    overflow-hidden">
        {/* Left Section: Text and Buttons */}
        <div className="flex flex-col md:px-10 p-3">
          <motion.h1
            initial={{ y: "10vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="text-[35px] font-bold"
          >
            Step into Style with <br />
            <span className="text-indigo-600">FTL</span>
          </motion.h1>
          <motion.p
            initial={{ y: "12vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            className="text-gray-500 text-[22px] sd:w-[300px] mb-4 md:w-[500px]"
          >
            Discover the latest trends in fashion wears and elevate your style
            game. From iconic wears to cutting-edge fashion, we've got you
            covered.
          </motion.p>
          <motion.div
            initial={{ y: "16vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 2.5 }}
            className="flex space-x-2 md:space-x-4 "
          >
            <button className="flex items-center justify-center bg-indigo-600 text-white font-semibold h-[50px] w-[150px] md:w-[180px] md:py-3 md:px-6 rounded-md hover:bg-indigo-700 transition duration-300">
              Shop Now <IoBagCheckOutline className="ml-2" />
            </button>
            <button className="flex items-center justify-center bg-indigo-600 text-white font-semibold sd:h-[50px] sd:w-[184px] md:py-3 md:px-6 rounded-md hover:bg-indigo-700 transition duration-300">
              Explore Collections{" "}
              <WiDirectionRight className="ml-2 text-[20px]" />
            </button>
          </motion.div>
        </div>

        {/* Right Section: Image Container */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="w-full "
        >
          {/* Ensure the image container has a fixed height */}
          <img
            src={ftl}
            className="object-fit w-full  h-[400px] md:h-[500px]"
            alt="Streetwear"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainBanner;
