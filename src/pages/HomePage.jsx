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
import MainBanner from "./ProductLink/MainBanner";
import HomeBanner2 from "./homeBanner2/HomeBanner2";
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
    <div className="overflow-hidden">
      <div className="bg-indigo-50 flex flex-col">
        <MainBanner />
        <HomeBanner2 />
      </div>

      <div className="">
        <div className="flex justify-center items-center mt-4">
          <h3 className="text-center font-bold text-[22px] uppercase text-darkgray  inline-block pt-2 pb-2">
            Featured
          </h3>
        </div>

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
