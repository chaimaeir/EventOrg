import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gle from "../../../assets/images/gle.svg";
import login from "../../../assets/images/login.png";
import { loginCustomer } from "../../../redux/actions/AuthActions.js/index";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth || {});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginCustomer({ email, password })).then((result) => {
      if (loginCustomer.fulfilled.match(result)) {
        navigate("/");
      } else {
        console.error("Login failed:", result.payload);
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="relative flex flex-col m-4 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/* Left side */}
        <div className="flex flex-col justify-center p-8 md:p-20">
          <span className="mb-3 text-4xl font-bold font-imbue">
            Welcome back!
          </span>
          <span className="font-light text-gray-400 mb-6">
            Enter your credentials to access your account
          </span>
          <div className="py-2">
            <span className="text-md">Email</span>
            <input
              type="text"
              className="w-full p-1 border border-gray-300 rounded-xl placeholder-font-light placeholder-text-gray-500"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-md">Password</span>
              <Link to="/resetpassword" className="font-bold text-md">
                Forgot password
              </Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-1 border border-gray-300 rounded-xl placeholder-font-light placeholder-text-gray-500"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-1 rounded-xl mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            disabled={loading}
          >
            Sign in
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="button"
            className="w-full border border-gray-300 text-md p-1 rounded-xl mb-6 hover:bg-black hover:text-white"
          >
            <img src={gle} alt="img" className="w-5 h-5 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?{" "}
            <span className="font-bold text-black">
              <Link to="/registerp" className="font-bold text-black">
                Sign Up
              </Link>
            </span>
          </div>
        </div>
        {/* Right side */}
        <div className="relative">
          <img
            src={login}
            alt="img"
            className="w-[400px] h-full hidden rounded-3xl md:block object-cover"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
