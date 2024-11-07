import React from "react";
import Banner from "../componets/Banner";
import { storeData } from "../Data/MockData";
import ProductPage from "./ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/ProductSlice";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
const HomePage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ftl-server.onrender.com/api/products"
        );
        dispatch(setProduct(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="">
      <Banner />
      <div className="">
        <h1 className="text-3xl font-bold text-gray-500 text-center mt-10">
          Top Sales
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6">
          {product.product.map((item) => (
            <ProductPage key={item.id} product={item} images={item.image} />
          ))}
        </div>
        <div className="flex items-center mb-6 justify-center">
          <Link to="/collections">
            <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-black p-2 flex justify-center items-center font-extrabold">
              <p className="">See more</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
