import React from "react";
import { CiSearch } from "react-icons/ci";
import FilterDataPage from "./FilterDataPage";
import { setSearchTerm } from "../redux/ProductSlice";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    /*  navigate("/filter-data"); */
  };

  return (
    <div className="w-full flex items-center flex-col">
      <div className="flex w-full items-center">
        <form onSubmit={handleSearch}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Product"
            className="w-full h-12 border border-gray-300  py-2 rounded py02 px-8"
          />
          <CiSearch className="absolute top-4  cursor-pointer right-3 text-black w-7 h-5"></CiSearch>
        </form>
      </div>

      <div>
        <FilterDataPage />
      </div>
    </div>
  );
};

export default SearchPage;
