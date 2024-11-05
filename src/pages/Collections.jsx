import React from "react";
import ProductPage from "./ProductPage";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
const Collections = () => {
  const product = useSelector((state) => state.product);
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-500 text-center mt-10">
        Top Sales
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {product.product.map((item) => (
          <ProductPage key={uuidv4()} product={item} />
        ))}
      </div>
      <div className="flex items-center mb-6 justify-center">
        <Link>
          <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-black p-2 flex justify-center items-center font-extrabold">
            <p className="z-10">See more</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Collections;
