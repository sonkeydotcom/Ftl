import React from "react";
import logo from "../assets/images/logo2.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import LoginPage from "../pages/LoginPage";
import { useSelector } from "react-redux";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import SignupPage from "../pages/SignupPage";
import Modal from "../Modal/Modal";
import { setSearchTerm } from "../redux/ProductSlice";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.product);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [opendropMen, setOpenDropMen] = useState(false);
  const [opendropWomen, setOpenDropWomen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");
  const handDropDownMen = () => {
    setOpenDropMen(!opendropMen);
  };

  const handDropDownWomen = () => {
    setOpenDropWomen(!opendropWomen);
  };
  const handlemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter");
  };

  return (
    <nav className="bg-black md:bg-white text-white  px-4 md:text-black shadow relative w-full">
      <div className="containner mx-auto px-3 md:text-black  md:h-24 md:px-0 flex justify-between items-center">
        <div className="block md:hidden" onClick={handlemenu}>
          {isMenuOpen ? (
            <TfiClose className="text-3xl cursor-pointer" />
          ) : (
            <CiMenuFries className="text-3xl cursor-pointer scale-100" />
          )}
        </div>
        <div className="flex items-center">
          <div>
            <Link to="/">
              <img
                src={logo}
                className="w-full h-14 md:w-32  cursor-pointer"
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center px-2">
            <ul className="flex">
              <Link to="/product">
                <li className="px-4 cursor-pointer">Top sales</li>
              </Link>
              <li className="px-4 cursor-pointer">New Arrivals </li>
              <li
                onClick={handDropDownMen}
                className="px-4 cursor-pointer flex items-center"
              >
                Men
                {opendropMen ? (
                  <div>
                    <MdOutlineArrowDropUp className=" text-2xl" />
                    <ul className="absolute top-24 bg-white font-bold  shadow px-4 w-44 rounded-b    ">
                      <li className="py-3 cursor-pointer">T-Shirt</li>
                      <li className="py-3 cursor-pointer">Long-sleeve</li>
                      <li className="py-3 cursor-pointer">Cap</li>
                      <li className="py-3 cursor-pointer">UnderWear</li>
                      <li className="py-3 cursor-pointer">Tracksuit</li>
                      <li className="py-3 cursor-pointer">Socks</li>
                    </ul>
                  </div>
                ) : (
                  <MdOutlineArrowDropDown className="text-2xl" />
                )}{" "}
              </li>

              <li
                onClick={handDropDownWomen}
                className="px-4 cursor-pointer flex items-center"
              >
                Women
                {opendropWomen ? (
                  <div>
                    <MdOutlineArrowDropUp className=" text-2xl" />
                    <ul className="absolute top-24 bg-white font-bold  shadow px-4 w-44 rounded-b    ">
                      <li className="py-3 cursor-pointer">Gym</li>
                      <li className="py-3 cursor-pointer">hat</li>
                    </ul>
                  </div>
                ) : (
                  <MdOutlineArrowDropDown className="text-2xl" />
                )}{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          {openSearch && (
            <div hidden md:block>
              <form onSubmit={handleSearch}>
                <input
                  placeholder="search products"
                  className="border-0 outline-gray-900"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
          )}
          <div className="px-4  hidden md:block">
            <Link>
              <CiSearch
                className="text-2xl cursor-pointer"
                onClick={handleOpenSearch}
                /* onMouseLeave={handleCloseSearch} */
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center px-2">
            <button
              className="hidden md:flex mx-4"
              onClick={() => setIsModalOpen(true)}
            >
              Login | Register{" "}
              <IoPersonOutline className="cursor-pointer text-2xl" />
            </button>
          </div>

          <div className="flex items-center px-2">
            <Link to="/cart">
              <CiShoppingCart className="cursor-pointer text-2xl" />
            </Link>

            {totalQuantity.length > 0 && (
              <span className="text-red-500 font-bold text-xl">
                {totalQuantity.length}
              </span>
            )}
          </div>
        </div>

        {isMenuOpen ? (
          <div
            className={`absolute top-14 left-0 bg-black md:hidden flex flex-col items-start w-full h-screen p-6 transition-transform duration-500 ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <ul className="flex flex-col w-full relative">
              <li className="px-4 py-2 cursor-pointer text-white">Top Sales</li>
              <li className="px-4 py-2 cursor-pointer text-white">
                New Arrivals
              </li>
              <li className="px-4 py-2 flex items-center cursor-pointer text-white relative group">
                Men
                <IoMdArrowDropright className="text-2xl ml-2" />
                <ul className="absolute left-20 top-2 rounded-xl bg-white text-black font-bold hidden group-hover:block transition-opacity duration-300 opacity-0 group-hover:opacity-100 shadow px-4 w-full ">
                  <li className="py-3 cursor-pointer">T-Shirt</li>
                  <li className="py-3 cursor-pointer">Long-sleeve</li>
                  <li className="py-3 cursor-pointer">Cap</li>
                  <li className="py-3 cursor-pointer">UnderWear</li>
                  <li className="py-3 cursor-pointer">Tracksuit</li>
                  <li className="py-3 cursor-pointer">Socks</li>
                </ul>
              </li>
              <li className="px-4 py-2 cursor-pointer text-white relative group">
                Women
                <ul className="absolute left-0 top-full bg-white shadow hidden group-hover:block transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 w-44">
                  <li className="py-3 cursor-pointer">Gym</li>
                  <li className="py-3 cursor-pointer">Hat</li>
                  <li className="py-3 cursor-pointer">Tops</li>
                  <li className="py-3 cursor-pointer">Shoes</li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}

        <Modal isModalOpen={ismodalOpen} setIsModalOpen={setIsModalOpen}>
          {isLogin ? (
            <LoginPage openSignUp={openSignUp} />
          ) : (
            <SignupPage openLogin={openLogin} />
          )}
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
