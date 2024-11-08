import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/CartSlice";
import { CiHeart } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { addToWishList } from "../redux/wishListSlice";

const ProductPage = ({ product, images }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast("Added to cart");
  };

  const handleAddToWishList = () => {
    dispatch(addToWishList(product)); // Correctly dispatch the action here
    toast("Added to wishlist ");
  };

  return (
    <div className="md:gap-6 pl-3 py-10 pr-3 md:flex w-full flex-col justify-between md:items-start">
      <Link to={`/products/${product.id}`} className="w-full">
        <div className="mx-2 rounded my-4 relative transform transition-transform duration-300">
          {/* Product Image */}
          <div className="w-full h-[250px]">
            <img
              src={images[0]}
              alt={product.name}
              className="w-full h-full object-contain mx-auto rounded-md"
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
          </div>
        </div>
      </Link>
      <div className="  mt-4 md:mt-0 flex  justify-between">
        <button
          onClick={(e) => handleAddToCart(e, product)}
          className="relative flex items-center  px-8 py-1 justify-between cursor-pointer border-b-2 border-r-4 border-gray-0 rounded-lg bg-gray-0 shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 active:translate-x-1 active:translate-y-1 group"
        >
          <AiOutlinePlus />
        </button>
        <button
          onClick={handleAddToWishList}
          className="relative flex items-center px-4 py-1 justify-between cursor-pointer border-b-2 border-r-4 border-gray-0 rounded-lg bg-gray-0 shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 active:translate-x-1 active:translate-y-1 group"
          title="Add to Wishlist" // Tooltip text
        >
          <CiHeart />
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductPage;
