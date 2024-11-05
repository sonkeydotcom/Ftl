import React from "react";

const LoginPage = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="">
        <div className="mb-4 w-full">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb--4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border "
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-check" />
            <span className="ml-2 text-gray-700">Remember Me </span>
          </label>
          <a href="#" className="text-red-600">
            Forgot paasword{" "}
          </a>
        </div>
        <div>
          <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-10 w-full rounded-md bg-black p-2 flex justify-center items-center font-extrabold">
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <p className="z-10">Login</p>
          </button>
        </div>
      </form>
      <div className="flex items-center ">
        <span>Don't Have an Account</span>
        <button className="text-red-600 ml-3" onClick={openSignUp}>
          Sing Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
