import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import emprtybag from "../assets/images/emptybag/emptybag1.jpg/";
import emprtybag1 from "../assets/images/emptybag/emptybag.jpg/";
import { increaseQuantity } from "../redux/CartSlice";
import { decreaseQuantity } from "../redux/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, removeFromCart } from "../redux/CartSlice";
import Modal from "../Modal/Modal";
import ChangeAddress from "./ChangeAddress";
const Cartpage = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("startimes estate, ago palace ");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {cart.product.length > 0 ? (
        <div className="">
          <h3 className="uppercase font-bold text-center">Cart </h3>
          <div className="flex flex-col md:flex-row justify-between   mt-8">
            <div className=" w-full shadow-2xl px-6">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS </p>
                <div className="flex space-x-4">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              <div>
                {cart.product.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between  border-b"
                  >
                    <div className="md:flex flex-col  i  space-x-4">
                      <img
                        src={product.image}
                        className="w-16 h-16 object-contain rounded   cursor-pointer"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="">{product.name}</h3>
                      </div>
                    </div>
                    <div className="flex px-3 space-x-3 items-center">
                      <p>₦{product.price}</p>
                      <div className="flex items-center justify-between ">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                          className="text-x1 font-bold px-1.5  mx-3 border border-b-8"
                        >
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          onClick={() => dispatch(increaseQuantity(product.id))}
                          className="text-x1 font-bold px-1  border border-b-8"
                        >
                          +
                        </button>
                      </div>

                      <p>₦{(product.quantity * product.price).toFixed(2)}</p>

                      <button
                        className="text-black hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 my-5 bg-white p-6 rounded-lg shadow-md border ">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL </h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="texxt-sm">Total Items:</span>
                <span className="font-bold">{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p>SHIPPING:</p>
                <div className="flex items-center">
                  <p className="ml-2">Shipping to :</p>
                  <span className="text-xs font-bold pv-2">{address}</span>
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
                onClick={() => navigate("/checkout")}
                className="relative group cursor-pointer text-sky-50  overflow-hidden h-12 mx-auto w-64 rounded-md bg-black p-2 flex justify-center items-center font-extrabold"
              >
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                <p className="z-10">Proceed to Checkout</p>
              </button>
            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <ChangeAddress
                setAddress={setAddress}
                setIsModalOpen={setIsModalOpen}
              />
            </Modal>
          </div>
        </div> /// cart ///
      ) : (
        <div className="flex w-full  justify-center  flex-col py-6">
          <div>
            <h1 className="font-bold text-xl text-center uppercase text-gray-700 ">
              Your bag is empty
            </h1>
          </div>
          <div className="mx-auto">
            <img src={emprtybag1} className=" md:w-96" alt="empty-bag" />
            <p className="text-gray-500 font-bold text-center capitalize">
              you Haven't placed any order yet
            </p>
          </div>
          <div className=" flex items-center justify-center py-3">
            <button
              onClick={() => navigate("/")}
              className="relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-64 rounded-md bg-black  flex justify-center items-center font-extrabold"
            >
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
              <p className="z-10 capitalize">shop now</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
