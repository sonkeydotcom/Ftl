import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CheckOutPage = ({ setOrder }) => {
  const [recepit, setRecepit] = useState("");
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    address: "39 road gwarinpa",
    city: "abuja",
    zip: "12334",
  });
  const navigate = useNavigate();
  const handleOrder = () => {
    const newOrder = {
      product: cart.product,
      orderNumber: "123333334",
      shippinginformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };

    console.log("Setting order:", newOrder);

    setOrder(newOrder);

    navigate("/order-confirmation");
  };

  const uploadRecepit = (e) => {
    setRecepit(e.target.files[0]);
  };
  const handleUploadImage = () => {
    const formData = new FormData();
    formData.append("recepit", recepit);
    axios.post("url", formData).then((res) => {
      console.log(res);
    });
  };

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);

  return (
    <div className="conatiner mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <div className="">
        <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between  space-x-10 mt-8">
          <div className="md:w-2/3">
            <div className="border p-2 mb-6">
              <div className="flex items-center justify-between ">
                <h3 className="text-lg font-semibold mb-2">
                  Biling Information
                </h3>
                <button onClick={() => setBillingToggle(!billingToggle)}>
                  {" "}
                  {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </button>
              </div>

              <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                <div>
                  <label htmlFor="" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <div>
                    <label htmlFor="" className="block text-gray-700">
                      Phone
                    </label>
                    <input
                      type="Phone "
                      className="w-full px-3 py-2 border"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SHIPIING DIV */}

            <div className="border p-2 mb-6">
              <div className="flex items-center justify-between ">
                <h3 className="text-lg font-semibold mb-2">
                  Shipping Information
                </h3>
                <button onClick={() => setShippingToggle(!shippingToggle)}>
                  {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </button>
              </div>

              <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                <div>
                  <label htmlFor="" className="block text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Address"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="" className="block text-gray-700">
                    City
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter City Name"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <div>
                    <label htmlFor="" className="block text-gray-700">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zip code"
                      className="w-full px-3 py-2 border"
                      placeholder="Enter Zip Code"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          zip: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PAYMENT DIV */}

            <div className="border p-2 mb-6">
              <div className="flex items-center justify-between ">
                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                <button onClick={() => setPaymentToggle(!paymentToggle)}>
                  {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                </button>
              </div>

              <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                <div>
                  <div className="flex items-center p-1">
                    <input
                      type="radio"
                      className="mr-2"
                      checked={paymentMethod === "Cash On Delivery"}
                      onClick={() => setPaymentMethod("Cash On Delivery")}
                    />
                    <span>Cash On Delivery</span>
                  </div>
                  <div className="flex items-center p-1">
                    <input
                      type="radio"
                      className="mr-2"
                      checked={paymentMethod === "Bank transfer"}
                      onClick={() => setPaymentMethod("Bank transfer")}
                    />
                    <span>Bank transfer</span>
                  </div>
                  <div className="flex items-center p-1">
                    <input
                      type="radio"
                      className="mr-2"
                      checked={paymentMethod === "Debit Card"}
                      onClick={() => setPaymentMethod("Debit Card")}
                    />
                    <span>Debit Card</span>
                  </div>

                  {/*  CASH ON DELIVERY ENDS HERE  */}

                  {/*  BANK TRANSFER  */}
                  {paymentMethod === "Bank transfer" && (
                    <div className="bg-gray-100 p-4 rounded mb-4">
                      <form>
                        <div className="flex flex-col mb-4">
                          <h3 className="flex items-center">
                            Name: <h3 className="font-bold">FTL STORE</h3>
                          </h3>
                          <div className="mb-1 flex items-center">
                            <p className="mr-1 ">Opay:</p>
                            <p>0042316623</p>
                          </div>
                          <div className="flex items-center">
                            <p className="mr-1">Moniepoint:</p>
                            <p>0042335353</p>
                          </div>
                        </div>
                        <hr />
                        <div className="mt-4">
                          <p className="text-gray-600">
                            Upload receipt for Comfirmation
                          </p>
                          <div className="">
                            <input
                              onChange={uploadRecepit}
                              type="file"
                              placeholder="upload receipt for Comfirmation "
                            />
                            <button
                              onClick={handleUploadImage}
                              className="relative group cursor-pointer text-sky-50  overflow-hidden px-14 mt-2 py-2 rounded-md bg-black  flex justify-center items-center font-extrabold"
                            >
                              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                              <p className="z-10 capitalize">Done</p>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}

                  {/*  BANK TRANSFER ENDS HERE  */}
                  {paymentMethod === "Debit Card" && (
                    <div className="bg-gray-100 p-4 rounded mb-4">
                      <h3 className="text-x1 font-semibold mb-4">
                        Debit Detail Information
                      </h3>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Card Number{" "}
                        </label>
                        <input
                          type="text"
                          placeholder="Card number "
                          className=" border p-2 w-full rounded"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Card Holder Name{" "}
                        </label>
                        <input type="text" placeholder="Card number" />
                      </div>

                      <div>
                        <div className="mb-4">
                          <label
                            htmlFor=""
                            className="block text-gray-700 font-semibold mb-2"
                          >
                            Date Exp..
                          </label>
                          <input type="number" />
                        </div>
                        <div>
                          <div className="mb-4">
                            <label
                              htmlFor=""
                              className="block text-gray-700 font-semibold mb-2"
                            >
                              CVV
                            </label>
                            <input type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div></div>
          </div>

          <div className="md:w-1/3  bg-red-500 p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-4 ">Order Summary</h3>
            <div className="space-y-4">
              {cart.product.map((product) => (
                <div className="flex items-center">
                  <div>
                    <img
                      src={product.image}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-md font-semibold">{product.name}</h3>
                      <p className="text-gray-600">
                        {product.price} X {product.quantity}
                      </p>
                      <div className="text-gray-800">
                        {product.price * product.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Total Price:</span>
                <span className="font-semibold">
                  ${cart.totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => handleOrder()}
                className="relative group cursor-pointer text-sky-50 mx-auto  overflow-hidden h-12 w-64 rounded-md bg-black  flex justify-center items-center font-extrabold"
              >
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
                <p className="z-10 capitalize">Place Order</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
