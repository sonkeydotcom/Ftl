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
          <button>Login</button>
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
