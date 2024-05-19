import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import register from "../../../assets/images/register.png";
import { registerProvider } from "../../../redux/actions/AuthActions.js/index";

function RegisterProvider() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(registerProvider({ companyName, email, password }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span
            className="mb-3 text-4xl font-medium"
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "32px",
            }}
          >
            Get Started Now
          </span>

          {error && <p className="text-red-500">{error}</p>}
          <div className="py-4">
            <span className="mb-2 text-md">Company Name</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              name="companyName"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            onClick={handleSignUp}
            disabled={loading}
          >
            Sign up
          </button>
          <div className="text-center text-gray-400">
            Already have an account?
            <Link to="/loginp" className="font-bold text-black">
              {" "}
              Log in
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={register}
            alt="img"
            className="w-[400px] h-full hidden rounded-3xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterProvider;
