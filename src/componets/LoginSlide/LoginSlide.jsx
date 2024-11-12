import React, { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { useAuth } from "../../ContextAuth/ContextAuth";
import axios from "axios";
import UserProfile from "./UserProfile";

const LoginSlide = ({ handleLoginClose, openLogin }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const { login } = useAuth(); // Get login function from context
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (openLogin) {
      setShowMenu(true);
    } else {
      const timer = setTimeout(() => setShowMenu(false), 300);
      return () => clearTimeout(timer);
    }
  }, [openLogin]);

  // LOGIN FUNCTION
  const loginUser = (email, password) => {
    axios
      .post("https://ftl-server.onrender.com/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        login(response.data.token); // Save token using login function from context
        setIsAuthenticated(true); // Set authenticated state to true
        handleLoginClose();
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  // SIGNUP FUNCTION
  const signupUser = (email, password, fullName) => {
    console.log("Email:", email, "Password:", password, "Fullname:", fullName);
    axios
      .post("https://ftl-server.onrender.com/api/auth/register", {
        email,
        password,
        fullName,
      })
      .then((response) => {
        login(response.data.token); // Save token using login function from context
        setIsAuthenticated(true); // Set authenticated state to true
        handleLoginClose();
      })
      .catch((error) => {
        console.error("Signup failed", error);
      });
  };

  return (
    <div>
      {openLogin && (
        <div className="bg-black fixed bg-opacity-10 z-10 backdrop-blur-md h-[100%] top-0 left-0 w-full">
          <div
            className={`bg-white md:w-[400px] absolute left-0 top-0 h-[100%] w-[250px] px-3 py-4 transition-transform duration-300 ease-in-out ${
              showMenu
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-[20px] font-bold">
                {isSignup ? "Sign Up" : "Login"}
              </h1>
              <RiCloseLargeLine
                className="md:text-[25px] text-[20px] cursor-pointer"
                onClick={handleLoginClose}
              />
            </div>

            {/* Render UserProfile if authenticated */}
            {isAuthenticated ? (
              <UserProfile />
            ) : (
              <div className="flex flex-col">
                {!isSignup ? (
                  <form
                    className="flex flex-col"
                    onSubmit={(e) => {
                      e.preventDefault();
                      loginUser(e.target.email.value, e.target.password.value);
                    }}
                  >
                    <label className="font-bold text-[15px] font-mono my-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      required
                      className="py-2 bg-gray-50 outline-none md:w-[90%] px-4"
                    />

                    <label className="font-bold text-[15px] font-mono my-2">
                      Password
                    </label>
                    <input
                      name="password"
                      placeholder="Password"
                      type="password"
                      required
                      className="py-2 bg-gray-50 outline-none md:w-[90%] px-4"
                    />

                    <div className="text-center mt-10 flex flex-col">
                      <button
                        className="bg-black p-2 text-white rounded my-4"
                        type="submit"
                      >
                        Login
                      </button>
                      <a className="cursor-pointer text-red-500 hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                ) : (
                  <form
                    className="flex flex-col"
                    onSubmit={(e) => {
                      e.preventDefault();
                      signupUser(
                        e.target.email.value,
                        e.target.password.value,
                        e.target.fullName.value
                      );
                    }}
                  >
                    <label className="font-bold text-[15px] font-mono my-2">
                      Name
                    </label>
                    <input
                      name="fullName"
                      placeholder="Name"
                      type="text"
                      required
                      className="py-2 bg-gray-50 outline-none md:w-[90%] px-4"
                    />

                    <label className="font-bold text-[15px] font-mono my-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      required
                      className="py-2 bg-gray-50 outline-none md:w-[90%] px-4"
                    />

                    <label className="font-bold text-[15px] font-mono my-2">
                      Password
                    </label>
                    <input
                      name="password"
                      placeholder="Password"
                      type="password"
                      required
                      className="py-2 bg-gray-50 outline-none md:w-[90%] px-4"
                    />

                    <button
                      className="bg-black p-2 text-white rounded my-4"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                )}

                <button
                  className="bg-white p-2 text-black border-black border-2 rounded my-4"
                  onClick={() => setIsSignup((prev) => !prev)}
                >
                  {isSignup
                    ? "Already have an account? Login"
                    : "Create Account"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSlide;
