import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingFetch from "../componets/Loading/LoadingFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ftl-server.onrender.com/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div>
        <LoadingFetch />
      </div>
    );
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-100 mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fill"
                />
              </div>

              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-black mb-2">
                {product.name}
              </h2>
              <p className="text-black text-sm mb-4">{product.description}</p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-black">Price:</span>
                  <span className="text-black">₦ {product.price}</span>
                </div>
                <div>
                  <span className="font-bold text-black">Availability:</span>
                  <span className="text-black">In Stock</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-black">Select Color:</span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-black">Select Size:</span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    S
                  </button>
                  <button className="bg-gray-300 text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    M
                  </button>
                  <button className="bg-gray-300 text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    L
                  </button>
                  <button className="bg-gray-300 text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    XL
                  </button>
                  <button className="bg-gray-300 text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-black">
                  Product Description:
                </span>
                <p className="text-black text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
