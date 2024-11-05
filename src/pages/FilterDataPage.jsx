import React from "react";
import { useSelector } from "react-redux";
import ProductPage from "./ProductPage";
const FilterDataPage = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filterProducts.map((item, index) => (
              <ProductPage key={index} product={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p>No Search matched :)</p>
        </div>
      )}
    </div>
  );
};

export default FilterDataPage;
