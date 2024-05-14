import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../../../public/images/register.png";
import gle from "../../../public/images/gle.svg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Add sign up logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="relative flex flex-col space-y-4 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:max-w-3xl">
        {/* Left side */}
        <div className="flex flex-col justify-center p-4 md:p-8 w-full md:w-1/2">
          <span
            className="mb-2 text-xl md:text-2xl font-medium"
            style={{ fontFamily: "Poppins", fontWeight: "500" }}
          >
            Get Started Now
          </span>

          <div className="py-1 md:py-2">
            <span className="mb-1 text-sm md:text-md">Name</span>
            <input
              type="text"
              className="w-full p-1 md:p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="py-1 md:py-2">
            <span className="mb-1 text-sm md:text-md">Email</span>
            <input
              type="email"
              className="w-full p-1 md:p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="py-1 md:py-2 w-full">
              <span className="mb-1 text-sm md:text-md">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-1 md:p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="py-1 md:py-2 w-full">
              <span className="mb-1 text-sm md:text-md">Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full p-1 md:p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="w-full bg-black text-white p-2 rounded-lg mb-4 hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Sign up
          </button>
          <div className="md:my-3 border-b text-center">
            <div className="leading-none px-2 inline-block text-xs md:text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or
            </div>
          </div>
          <button className="w-full border border-gray-300 text-sm md:text-md p-2 rounded-lg mb-4 hover:bg-black hover:text-white">
            <img
              src={gle}
              alt="img"
              className="w-4 h-4 md:w-6 md:h-6 inline mr-2"
            />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Already have an account?
            <Link to="/login" className="font-bold text-black">
              {" "}
              Log in
            </Link>
          </div>
          {/* <div className="text-center text-gray-400">
                    Want to register as a provider?
                    <Link to="/registerprovider" className="font-bold text-black"> Register as a Provider</Link>
                </div> */}
        </div>
        {/* Right side */}
        <div className="relative hidden md:block w-1/2">
          <img
            src={register}
            alt="img"
            className="w-full h-auto rounded-r-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
