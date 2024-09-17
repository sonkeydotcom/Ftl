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
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <p className="z-10">See more</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Collections;
