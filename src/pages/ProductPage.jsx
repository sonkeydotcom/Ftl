import React from "react";
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
              <button
                title="Add to Wishlist"
                onClick={handleAddToWishList}
                className="bg-gray-100 p-2 rounded-full absolute top-4 right-2"
              >
                <span>
                  {" "}
                  <CiHeart />
                </span>
              </button>
            </div>

            <div className="flex flex-row space-x-2 items-center ">
              {/* Product Name and Description */}
              <h3 className="text-[15px] font-light text-gray-800 truncate">
                {product.name}
              </h3>

              {/* Product Price */}
              <p className="text-[12px] font-extralight text-black ">
                ₦{product.price}
              </p>

              {/* Add to Cart Button */}
            </div>
          </div>
        </Link>
        {/*   <div className="mt-4 md:mt-0 flex justify-between">
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="relative flex items-center px-8 py-1 justify-between cursor-pointer border-b-2 border-r-4 border-gray-0 rounded-lg bg-gray-0 shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 active:translate-x-1 active:translate-y-1 group"
          >
            <AiOutlinePlus />
          </button>
        </div> */}

        <ToastContainer />
      </motion.div>
    </div>
  );
};

export default ProductPage;
