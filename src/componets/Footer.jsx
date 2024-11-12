import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-black pt-5 pb-2 px-3 md:px-4 overflow-hidden">
      <div className="bg-white flex flex-col">
        <div className="bg-white flex flex-col md:flex-row px-2 md:px-[30px] justify-between mb-5 border-black border-b-[1px] mb:border-b-[0px]">
          {/* Contact Section */}
          <motion.div
            className="p-4 flex flex-col md:w-[25%] w-full md:border-r-[1px] border-black md:border-b-0 border-b-2 overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", bounce: 0.5, duration: 2 },
            }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="font-bold mb-2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: "spring", bounce: 0.5, duration: 2 },
              }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h4>
            <motion.p
              className="mb-2 text-[14px] text-gray-500 underline"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              ago palace tinubu lagos startime estate isolo
            </motion.p>
            <motion.p
              className="mb-2 text-[14px] text-gray-500 hover:underline"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.4,
                },
              }}
              viewport={{ once: true }}
            >
              Operating hours: Monday – Saturday (10am -10pm)
            </motion.p>
            <motion.p
              className="mb-2 text-[14px] text-gray-500 hover:underline"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.6,
                },
              }}
              viewport={{ once: true }}
            >
              Sunday (12pm-10pm)
            </motion.p>
            <motion.p
              className="mb-2 text-[14px] text-gray-500 hover:underline"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.8,
                },
              }}
              viewport={{ once: true }}
            >
              08169084535
            </motion.p>
          </motion.div>

          {/* Shop Here Section */}
          <motion.div
            className="p-4 flex flex-col md:w-[25%] w-full md:border-r-[1px] border-black md:border-b-0 border-b-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", bounce: 0.5, duration: 2 },
            }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="font-bold mb-2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: "spring", bounce: 0.5, duration: 2 },
              }}
              viewport={{ once: true }}
            >
              Shop Here
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.4,
                  },
                }}
                viewport={{ once: true }}
              >
                All Items
              </motion.li>
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.6,
                  },
                }}
                viewport={{ once: true }}
              >
                Men
              </motion.li>
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.8,
                  },
                }}
                viewport={{ once: true }}
              >
                Female
              </motion.li>
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 1,
                  },
                }}
                viewport={{ once: true }}
              >
                Collections
              </motion.li>
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 1.2,
                  },
                }}
                viewport={{ once: true }}
              >
                Accessories
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className="p-4 flex flex-col md:w-[25%] w-full md:border-r-[1px] border-black md:border-b-0 border-b-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", bounce: 0.5, duration: 2 },
            }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="font-bold mb-2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: "spring", bounce: 0.5, duration: 2 },
              }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.4,
                  },
                }}
                viewport={{ once: true }}
              >
                All Items
              </motion.li>
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.6,
                  },
                }}
                viewport={{ once: true }}
              >
                Men
              </motion.li>
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.8,
                  },
                }}
                viewport={{ once: true }}
              >
                Female
              </motion.li>
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 1,
                  },
                }}
                viewport={{ once: true }}
              >
                Collections
              </motion.li>
              <motion.li
                className="mb-2 text-[14px] text-gray-500 hover:underline"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 1.2,
                  },
                }}
                viewport={{ once: true }}
              >
                Accessories
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Discount/Newsletter Section */}
          <motion.div
            className="p-4 flex flex-col md:w-[25%] w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", bounce: 0.5, duration: 2 },
            }}
            viewport={{ once: true }}
          >
            <motion.p
              className="font-bold mb-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: "spring", bounce: 0.5, duration: 2 },
              }}
              viewport={{ once: true }}
            >
              Get Discount off your Next Order
            </motion.p>
            <motion.form
              className="flex-col flex"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              <motion.input
                type="text"
                placeholder="Name"
                className="border-b-[1px] border-black py-2 mb-4 focus:outline-none focus:ring-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.4,
                  },
                }}
                viewport={{ once: true }}
              />
              <motion.input
                type="email"
                placeholder="Email"
                className="border-b-[1px] border-black py-2 mb-4 focus:outline-none focus:ring-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.6,
                  },
                }}
                viewport={{ once: true }}
              />
              <motion.button
                className="bg-black text-white py-4 cursor-pointer my-4"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 2,
                    delay: 0.8,
                  },
                }}
                viewport={{ once: true }}
              >
                Subscribe To Our Newsletter
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        <div className="flex justify-between px-4">
          <div>
            <motion.p
              className="text-[14px] text-gray-500 hover:underline"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 1,
                },
              }}
              viewport={{ once: true }}
            >
              © 2024 FTL All Rights Reserved
            </motion.p>
          </div>
          <div>logogogo</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
