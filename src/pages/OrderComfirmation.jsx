import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const OrderComfirmation = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="conatiner mx-auto py-8 px-4 md:px16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4 ">Thank You for Your Order</h2>
      <p>
        Your order has been placed successfully. you will receive an email
        shortly{" "}
      </p>
      <div className="mt-6 p-4 border  shadow-md rounded-md bg-red-100">
        <h3 className="text-lg font-semibold mb-2 ">Order Summary</h3>
        <p>Order Number : {order.orderNumber}</p>
        <div className="mt-4">
          <h2 className="text-md font-semibold mb-2">Shipping Information</h2>
          <p>{order.shippinginformation.address}</p>
          <p>{order.shippinginformation.city}</p>
          <p>{order.shippinginformation.zip}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-md font-semibold mb-2">Products Ordered</h2>
          {order.product.map((products) => (
            <div key={products.id} className="flex justify-between mt-2">
              <p>
                {products.name} x ({products.quantity})
              </p>
              <p className="text-gray-500">
                {products.price * products.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold">{order.totalPrice.toFixed(2)}</span>
        </div>

        <div className="mt-6">
          <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">
            Track order
          </button>
          <button
            className="bg-red-600 text-white px-4  py-2 hover:bg-red-800 ml-4"
            onClick={() => navigate("/")}
          >
            Contine Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComfirmation;
