import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/CartSlice";

const ProductPage = ({ product, images }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast("Added to cart");
  };

  return (
    <div className="md:gap-6 pl-3 pr-3 md:flex w-full justify-between md:items-start">
      <Link to={`/products/${product.id}`} className="w-full">
        <div className="mx-2 rounded my-4 relative transform transition-transform duration-300">
          {/* Product Image */}
          <div className="w-full h-[250px]">
            <img
              src={images[0]}
              alt={product.name}
              className="w-full h-full object-cover mx-auto rounded-md"
            />
          </div>

          <div className="flex flex-col mt-4">
            {/* Product Name and Description */}
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h3>

            <p className="text-gray-500 truncate">{product.description}</p>

            {/* Product Price */}
            <p className="text-xl font-bold text-indigo-600 mt-2">
              ${product.price}
            </p>

            {/* Add to Cart Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="relative flex items-center justify-between w-36 h-10 cursor-pointer border-b-2 border-r-4 border-gray-800 rounded-lg bg-gray-100 shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 active:translate-x-1 active:translate-y-1 group"
              >
                <span className="text-gray-800 font-semibold transition-transform duration-300 ease-in-out transform translate-x-6 group-hover:translate-x-[-150%]">
                  Add Item
                </span>
                <span className="absolute flex items-center justify-center w-10 h-full bg-gray-200 transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:w-full group-hover:translate-x-0">
                  <svg
                    className="w-5 text-gray-800"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19"></line>
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Link>

      <ToastContainer />
    </div>
  );
};

export default ProductPage;
