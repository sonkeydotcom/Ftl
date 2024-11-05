import React from "react";

const SignupPage = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb--4 w-full">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border "
            placeholder="Enter Password"
          />
        </div>

        <div className="mt-3 ">
          <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-10 w-full rounded-md bg-black p-2 flex justify-center items-center font-extrabold">
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
            <p className="z-10">Signup</p>
          </button>
        </div>
      </form>
      <div className="flex  mt-3 items-center">
        <span>Already Have an Account</span>
        <button className="text-red-800 ml-3" onClick={openLogin}>
          Login{" "}
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
