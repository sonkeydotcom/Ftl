import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

const CheckoutPage = () => {
  const location = useLocation(); // Use location hook to get passed state
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  // Add a state for delivery method
  const [deliveryMethod, setDeliveryMethod] = useState("delivery"); // default to 'delivery'

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
    state: location.state?.shippingInfo?.state || "", // New state field
  });

  const [paymentMethod, setPaymentMethod] = useState(
    location.state?.paymentMethod || "COD"
  );

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  // Delivery fee constant
  const deliveryFee = 10000; // $10,000 delivery fee for delivery orders

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
    if (deliveryMethod === "delivery") {
      if (!shippingInfo.address)
        validationErrors.address = "Address is required";
      if (!shippingInfo.city) validationErrors.city = "City is required";
      if (!shippingInfo.zip) validationErrors.zip = "Zip code is required";
      if (!shippingInfo.state) validationErrors.state = "State is required"; // Validate state
    }
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

  // Calculate total order price including delivery fee
  const calculateTotalPrice = () => {
    const cartTotal = cart.totalPrice || 0;
    return deliveryMethod === "delivery" ? cartTotal + deliveryFee : cartTotal;
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-2">
      <div className="">
        <h3 className="text-xl font-semibold mb-4">CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-0 mt-8">
          <div className="md:w-2/3 ">
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

            {/* Delivery Method Section */}
            <div className="border p-2 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold mb-2">Delivery Method</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="mr-2"
                    checked={deliveryMethod === "delivery"}
                    onChange={() => setDeliveryMethod("delivery")}
                  />
                  <div className="flex items-center space-x-2">
                    <span>Delivery</span>
                    <span>
                      <TbTruckDelivery />
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    className="mr-2"
                    checked={deliveryMethod === "pickup"}
                    onChange={() => setDeliveryMethod("pickup")}
                  />
                  <div className="flex items-center space-x-2">
                    {" "}
                    <span>Pick Up in Store</span>
                    <span>
                      <FaPersonWalkingLuggage />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Info Section (Conditional Rendering) */}
            {deliveryMethod === "delivery" && (
              <div className="border p-2 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2">
                    Shipping Information
                  </h3>
                </div>

                <div className={`space-y-4`}>
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

                  <div>
                    <label htmlFor="state" className="block text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="w-full px-3 py-2 border"
                      placeholder="Enter State"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm">{errors.state}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Pickup Store Information (When Pickup is selected) */}
            {deliveryMethod === "pickup" && (
              <div className="border p-2 mb-6">
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Pick-Up Location:
                  </h3>
                  <p className="text-sm underline">
                    Ago Best Time, Isolo, Lagos State
                  </p>
                  <p className="text-xs text-red-500 mt-2">
                    We only have one store here in Nigeria.
                  </p>
                </div>
              </div>
            )}

            {/* Payment Info Section */}
            <div className="border p-2 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                <button onClick={() => setPaymentToggle(!paymentToggle)}>
                  {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                </button>
              </div>

              <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                {/* Main Payment Options */}
                <div>
                  <div className="flex items-center p-1">
                    <input
                      type="radio"
                      className="mr-2"
                      checked={paymentMethod === "Cash on Delivery"}
                      onChange={() => setPaymentMethod("Cash on Delivery")}
                    />
                    <div>
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
                    <span>Debit or Credit Card Payment</span>
                  </div>

                  <div className="flex items-center p-1">
                    <input
                      type="radio"
                      className="mr-2"
                      checked={paymentMethod === "Bank Transfer"}
                      onChange={() => setPaymentMethod("Bank Transfer")}
                    />
                    <span>Bank Transfer</span>
                  </div>
                </div>

                {/* Conditional Rendering for Bank Transfer */}
                {paymentMethod === "Bank Transfer" && (
                  <div className="bg-gray-100 p-4 rounded mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Bank Transfer Details
                    </h3>
                    <p className="text-sm mb-4">
                      Please note that our conversion rate is 1,700 NGN to $1,
                      and we will confirm all payments before processing your
                      order.
                    </p>
                    <p className="font-semibold mb-4">
                      Make a bank transfer in Nigerian Naira (NGN) of the
                      required amount to the following account:
                    </p>

                    <div className="space-y-2 mb-4">
                      <p className="font-semibold">Account Name:</p>
                      <p>FTL CLOTHING LUXURY </p>

                      <p className="font-semibold">Account Number:</p>
                      <p>8169084534</p>

                      <p className="font-semibold">Bank Name:</p>
                      <p>OPAY</p>
                    </div>

                    <p className="text-sm mb-4">
                      Kindly contact <strong>+234(0) 816 908 4535</strong> with
                      your detailed proof of payment confirmation. Please note
                      that we confirm all payments before processing orders.
                    </p>

                    <p className="text-sm">Thank you for your cooperation.</p>
                  </div>
                )}

                {/* Conditional Rendering for Debit or Credit Card Payment */}
                {paymentMethod === "Debit Card" && (
                  <div className="bg-gray-100 p-4 rounded mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit or Credit Card Payment
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
                      <input
                        type="text"
                        placeholder="Card Holder Name"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-slate-800">
            <div className="text-white p-6 rounded-lg shadow ">
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
                {/* Only display Delivery Fee if deliveryMethod is "delivery" */}
                {deliveryMethod === "delivery" && (
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span className="font-semibold">₦{deliveryFee}</span>
                  </div>
                )}

                {/* Order Total */}
                <div className="flex justify-between">
                  <span>Total Price:</span>
                  <span className="font-semibold">
                    ₦{calculateTotalPrice().toFixed(2)}
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
    </div>
  );
};

export default CheckoutPage;
