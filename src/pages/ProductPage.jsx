import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/CartSlice";
import { CiHeart } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { addToWishList } from "../redux/wishListSlice";
import { motion } from "framer-motion";

const ProductPage = ({ product, images }) => {
  const [wishlist, setWishlist] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast("Added to cart");
  };

  const handleAddToWishList = () => {
    if (!wishlist) {
      dispatch(addToWishList(product));
      toast("Added to wishlist");
    } else {
      // Handle removing from wishlist if desired
      toast("Removed from wishlist");
    }
    setWishlist(!wishlist); // Toggle wishlist state
  };

  return (
    <div>
      <motion.div
        className="md:gap-6 pl-3 mb-10 pr-3 md:flex w-full flex-col justify-between md:items-start"
        initial={{ opacity: 0, x: -10 }} // Initial state: off-screen (to the left)
        whileInView={{
          opacity: 1, // Make it fully visible
          x: 0, // Move to the original position
        }}
        transition={{
          duration: 1, // Animation duration
          // Delay before starting animation
          ease: "easeInOut", // Easing function
        }}
        viewport={{ once: true }} // Make the animation trigger only once when in view
      >
        <Link to={`/products/${product.id}`} className="w-full">
          <div className="mx-2 rounded my-4 relative transform transition-transform duration-300">
            {/* Product Image */}
            <div className="w-full h-[250px] relative">
              <img
                src={images[0]}
                alt={product.name}
                className="w-full h-full object-contain mx-auto  rounded-md"
              />
            </div>

            <div className="flex flex-row space-x-2 items-center ">
              <h3 className="text-[15px] font-light text-gray-800 truncate">
                {product.name}
              </h3>

              {/* Product Price */}
              <p className="text-[12px] font-extralight text-black ">
                ₦{product.price}
              </p>
            </div>
          </div>
        </Link>
        <button
          title="Add to Wishlist"
          onClick={handleAddToWishList}
          className={`p-2 rounded-full ${
            wishlist ? "bg-red-100" : "bg-gray-100"
          }`}
        >
          <span>
            <CiHeart className="text-black" />
          </span>
        </button>
        <ToastContainer />
      </motion.div>
    </div>
  );
};

export default ProductPage;
