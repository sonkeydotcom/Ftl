import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation(); // Use location hook to get passed state
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  // Set initial state based on passed data (if available)
  const [billingInfo, setBillingInfo] = useState({
    name: location.state?.billingInfo?.name || "",
    email: location.state?.billingInfo?.email || "",
    phone: location.state?.billingInfo?.phone || "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    address: location.state?.shippingInfo?.address || "",
    city: location.state?.shippingInfo?.city || "",
    zip: location.state?.shippingInfo?.zip || "",
  });

  const [paymentMethod, setPaymentMethod] = useState(
    location.state?.paymentMethod || "COD"
  );

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleOrder = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Don't proceed if validation fails
    }

    const orderDetails = {
      billingInfo,
      shippingInfo,
      paymentMethod,
      cart,
    };

    navigate("/order-confirmation", { state: orderDetails });
  };

  // Validate form data
  const validateForm = () => {
    const validationErrors = {};
    if (!billingInfo.name) validationErrors.name = "Name is required";
    if (!billingInfo.email) validationErrors.email = "Email is required";
    if (!billingInfo.phone) validationErrors.phone = "Phone is required";
    if (!shippingInfo.address) validationErrors.address = "Address is required";
    if (!shippingInfo.city) validationErrors.city = "City is required";
    if (!shippingInfo.zip) validationErrors.zip = "Zip code is required";
    return validationErrors;
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));

    if (value) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name]; // Remove error if field is filled
        return newErrors;
      });
    }
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));

    if (value) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name]; // Remove error if field is filled
        return newErrors;
      });
    }
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <div className="">
        <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-0 mt-8">
          <div className="md:w-2/3">
            {/* Billing Info Section */}
            <div className="border p-2 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold mb-2">
                  Billing Information
                </h3>
                <button onClick={() => setBillingToggle(!billingToggle)}>
                  {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </button>
              </div>

              <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                <div>
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Your Name"
                    value={billingInfo.name}
                    onChange={handleBillingChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border"
                    placeholder="Email Address"
                    value={billingInfo.email}
                    onChange={handleBillingChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border"
                    placeholder="Phone Number"
                    value={billingInfo.phone}
                    onChange={handleBillingChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Info Section */}
            <div className="border p-2 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold mb-2">
                  Shipping Information
                </h3>
                <button onClick={() => setShippingToggle(!shippingToggle)}>
                  {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </button>
              </div>

              <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                <div>
                  <label htmlFor="address" className="block text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter City Name"
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="zip" className="block text-gray-700">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Zip Code"
                    value={shippingInfo.zip}
                    onChange={handleShippingChange}
                  />
                  {errors.zip && (
                    <p className="text-red-500 text-sm">{errors.zip}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Info Section */}
            <div className="border p-2 mb-6">
              <div className="flex items-center justify-between">
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
                      checked={paymentMethod === "Cash on Delivery"}
                      onChange={() => setPaymentMethod("Cash on Delivery")}
                    />
                    <div>
                      {" "}
                      <span>Cash on Delivery</span> <span>(Lagos Only!)</span>
                    </div>
                  </div>

                  <div className="flex items-center p-1">
                    <input
                      type="radio"
                      className="mr-2"
                      checked={paymentMethod === "Debit Card"}
                      onChange={() => setPaymentMethod("Debit Card")}
                    />
                    <span>Card</span>
                  </div>

                  {paymentMethod === "Debit Card" && (
                    <div className="bg-gray-100 p-4 rounded mb-4">
                      <h3 className="text-x1 font-semibold mb-4">
                        Debit Card Details
                      </h3>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="Card number"
                          className="border p-2 w-full rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Card Holder Name
                        </label>
                        <input type="text" placeholder="Card Holder Name" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-black text-white p-6 rounded-lg shadow-xl border">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.product.map((product, index) => (
                <div key={index} className="flex items-center">
                  <img
                    src={product.image}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{product.name}</h3>
                    <p className="text-gray-600">
                      {product.price} X {product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Total Price:</span>
                <span className="font-semibold">
                  ₦{cart.totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleOrder}
                disabled={Object.keys(errors).length > 0}
                className="relative group cursor-pointer text-sky-50 mx-auto overflow-hidden h-12 w-64 rounded-md bg-indigo-600 my-4 flex justify-center items-center font-extrabold"
              >
                <p className="capitalize">Place Order</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
