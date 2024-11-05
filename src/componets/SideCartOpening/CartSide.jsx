import React, { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import emprtybag1 from "/Users/duru/Desktop/FTL/ftl/src/assets/images/emptybag/emptybag.jpg";
import Modal from "../../Modal/Modal";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/CartSlice";
import ChangeAddress from "../../pages/ChangeAddress";
import { Link, useNavigate } from "react-router-dom";

const CartSide = ({ openCart, handleCartClose }) => {
  const [showMenu, setShowMenu] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState("startimes estate, ago palace ");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function for closecart and procesdd to checkoutpage
  const checkoutHnadle = () => {
    handleCartClose();
    navigate("/");
  };

  const proceddToCheckout = () => {
    handleCartClose();
    navigate("/checkout");
  };
  /// useffect for delay transition
  useEffect(() => {
    if (openCart) {
      setShowMenu(true);
    } else {
      // Delay the state change to allow for slide out effect
      const timer = setTimeout(() => setShowMenu(false), 300);
      return () => clearTimeout(timer);
    }
  }, [openCart]);

  return (
    <div>
      {openCart && (
        <div className="bg-black fixed bg-opacity-10 z-10 backdrop-blur-md h-[100%] top-0 right-0 w-full ">
          <div
            className={`bg-white md:w-[500px]  absolute right-0 top-0 h-[100%] w-[330px] px-3 py-4   transition-transform duration-300 ease-in-out ${
              showMenu
                ? "transform translate-x-50"
                : "transform -translate-x-full" // Slide out to the left
            }`}
          >
            <div>
              {cart.product.length > 0 ? (
                //// CART ITEMS DISPLAY HERE BELOW

                <div className="bg-re-400">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h1 className="text-[20px] font-bold font-style:italic">
                        Shoppiung Cart
                      </h1>{" "}
                      <span className="">Items: {cart.totalQuantity}</span>
                    </div>
                    <RiCloseLargeLine
                      className="md:text-[25px] text-[20px] cursor-pointer"
                      onClick={handleCartClose}
                    />
                  </div>
                  <div className="flex flex-col  justify-between   w-full  mt-8">
                    <div className="  shadow-2xl ">
                      <div>
                        {cart.product.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center p-2    border-b"
                          >
                            <div className="flex mr-5">
                              <img
                                src={product.image}
                                className="w-24 h-24 object-contain rounded   cursor-pointer"
                              />
                            </div>
                            <div className="flex-col  space-x-3 items-center">
                              <div className="flex-1 ml-4">
                                <p className=" font-light  line-clamp-2 text-[14px] italic antialiased">
                                  {product.name}
                                </p>
                                <p className="font-mono">₦{product.price}</p>
                              </div>
                              <div className="flex justify-between w-full items-center">
                                <div className=" flex p-2 border items-center justify-between w-[100px] my-2">
                                  <a
                                    className="cursor-pointer"
                                    onClick={() =>
                                      dispatch(decreaseQuantity(product.id))
                                    }
                                  >
                                    <FiMinus />
                                  </a>
                                  <span>{product.quantity}</span>
                                  <a
                                    className="cursor-pointer"
                                    onClick={() =>
                                      dispatch(increaseQuantity(product.id))
                                    }
                                  >
                                    <GoPlus />
                                  </a>
                                </div>
                                <div className="ml">
                                  <a
                                    onClick={() =>
                                      dispatch(removeFromCart(product.id))
                                    }
                                  >
                                    <RiCloseLargeLine />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className=" my-5 bg-white p-6 rounded-lg shadow-md border ">
                      <h3 className="text-sm font-semibold mb-5">
                        CART TOTAL{" "}
                      </h3>
                      <div className="flex justify-between mb-5 border-b pb-1">
                        <span className="texxt-sm">Total Items:</span>
                        <span className="font-bold"></span>
                      </div>

                      <div className="mb-4 border-b pb-2">
                        <p>SHIPPING:</p>
                        <div className="flex items-center">
                          <p className="ml-2">Shipping to :</p>
                          <span className="text-xs font-bold pv-2">
                            {address}
                          </span>
                        </div>

                        <div></div>

                        <div>
                          <button
                            className="text-blue-500 hover:underline mt-1 mb-1"
                            onClick={() => setIsModalOpen(true)}
                          >
                            Change Address{" "}
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between mb-4">
                        <p>Total Price: </p>
                        <span className="font-bold">₦{cart.totalPrice}</span>
                      </div>

                      <button
                        onClick={proceddToCheckout}
                        className=" group cursor-pointer text-sky-50  overflow-hidden h-12 mx-auto w-64 rounded-md bg-black p-2 flex justify-center items-center font-extrabold"
                      >
                        <p className="z-10">Proceed to Checkout</p>
                      </button>
                    </div>

                    <Modal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                    >
                      <ChangeAddress
                        setAddress={setAddress}
                        setIsModalOpen={setIsModalOpen}
                      />
                    </Modal>
                  </div>
                </div> /// cart ///
              ) : (
                /////EMPTY CART DISPLAY
                <div className="flex    justify-center  flex-col py-0">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h1 className="text-[20px] font-bold font-style:italic">
                        Shoppiung Cart
                      </h1>{" "}
                    </div>
                    <RiCloseLargeLine
                      className="md:text-[25px] text-[20px] cursor-pointer"
                      onClick={handleCartClose}
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-center uppercase text-gray-700 ">
                      Your bag is empty
                    </h1>
                  </div>
                  <div className="mx-auto">
                    <img
                      src={emprtybag1}
                      className=" md:w-96"
                      alt="empty-bag"
                    />
                    <p className="text-gray-500 font-bold text-center capitalize">
                      you Haven't placed any order yet
                    </p>
                  </div>
                  <div className=" flex items-center justify-center py-3">
                    <button
                      onClick={checkoutHnadle}
                      className="relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-64 rounded-md bg-black  flex justify-center items-center font-extrabold"
                    >
                      <p className="z-10 capitalize">shop now</p>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSide;
