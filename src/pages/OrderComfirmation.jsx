import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clearCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";

const OrderConfirmation = () => {
  const location = useLocation();
  const { billingInfo, shippingInfo, paymentMethod, cart } = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const continueShopping = () => {
    dispatch(clearCart());
    navigate("/");
  };
  const editInfoFunction = () => {
    // Passing the current info as state to the checkout page
    navigate("/checkout", {
      state: {
        billingInfo,
        shippingInfo,
        paymentMethod,
      },
    });
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-indigo-600">
            Thank You for Your Order
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Your order has been placed successfully. You will receive an email
            shortly.
          </p>
        </div>

        {/* Order Confirmation Details */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          {/* Billing Information */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Billing Information
            </h3>
            <div className="space-y-1">
              <p className="text-lg text-gray-700">
                Name: <span className="font-semibold">{billingInfo.name}</span>
              </p>
              <p className="text-lg text-gray-700">
                Email:{" "}
                <span className="font-semibold">{billingInfo.email}</span>
              </p>
              <p className="text-lg text-gray-700">
                Phone:{" "}
                <span className="font-semibold">{billingInfo.phone}</span>
              </p>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Shipping Information
            </h3>
            <div className="space-y-1">
              <p className="text-lg text-gray-700">
                Address:{" "}
                <span className="font-semibold">{shippingInfo.address}</span>
              </p>
              <p className="text-lg text-gray-700">
                City: <span className="font-semibold">{shippingInfo.city}</span>
              </p>
              <p className="text-lg text-gray-700">
                Zip: <span className="font-semibold">{shippingInfo.zip}</span>
              </p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Payment Method
            </h3>
            <p className="text-lg text-gray-700">{paymentMethod}</p>
          </div>

          {/* Order Items */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Order Items
            </h3>
            <div className="space-y-2">
              {cart.product.map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="text-lg text-gray-700">
                    {product.name} -
                    <span className="font-semibold">₦{product.price}</span> x ({" "}
                    {product.quantity})
                  </p>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-800">Total Price:</span>
                  <span className="text-indigo-600">
                    ₦{cart.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Further Action Button */}
        <div className="mt-8 flex justify-around">
          <button
            onClick={editInfoFunction}
            className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300 flex  items-center"
          >
            <span className="mr-2">
              <FiEdit />
            </span>
            Edit info
          </button>
          <button
            onClick={continueShopping}
            className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
