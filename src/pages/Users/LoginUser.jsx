import React from "react";

const LoginUser = ({ openSignUp }) => {
  return (
    <div>
      {openLogin && (
        <div className="bg-black fixed bg-opacity-10  z-10 backdrop-blur-md h-[100%] top-0 left-0 w-full">
          <div
            className={`bg-white md:w-[400px]  absolute left-0 top-0 h-[100%] w-[250px] px-3 py-4   transition-transform duration-300 ease-in-out ${
              showMenu
                ? "transform translate-x-0"
                : "transform -translate-x-full" // Slide out to the left
            }`}
          >
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-[20px] font-bold">Login</h1>
              <RiCloseLargeLine
                className="md:text-[25px] text-[20px] cursor-pointer"
                onClick={handleLoginClose}
              />
            </div>
            <div className="flex flex-col">
              <form className="flex flex-col">
                <label className="font-bold text-[15px] font-mono my-2">
                  Email Address
                </label>
                <input
                  placeholder="Email Address"
                  type="email"
                  required
                  className="py-2 bg-gray-50 outline-none md:w-[90%] px-4"
                />

                <label className="font-bold text-[15px] font-mono my-2">
                  Password
                </label>
                <input
                  placeholder=" Password"
                  type="email"
                  required
                  className="py-2 bg-gray-50 outline-none md:w-[90%] px-4"
                />
                <div className="text-center mt-10 flex flex-col">
                  <a className="cursor-pointer text-red-500 hover:underline">
                    Forget Password
                  </a>

                  <button
                    className="bg-black p-2 text-white rounded my-4"
                    onClick={() => loginUser("email@example.com", "password")}
                  >
                    Login
                  </button>
                </div>
              </form>
              <button className="bg-white p-2 text-black border-black border-2 rounded my-4">
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginUser;
