import { Link } from "react-router-dom";
import gle from "../../../assets/images/gle.svg";
import login from "../../../assets/images/login.png";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <form className="relative flex flex-col m-4 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
    {/* Left side */}
    <div className="flex flex-col  ms- justify-center md:p-20">
      <span className="mb-3 text-4xl font-bold font-imbue">Welcome back!</span>
      <span className="font-light text-gray-400 mb-6">
        Enter your Credentials to access your account
      </span>
      <div className="py-0">
        <span className="mb-2 text-md">Email</span>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
          name="email"
          id="email"
          placeholder="name@gmail.com"
        />
      </div>
      <div className="py-4">
        <span className="mb-2 text-md">Password</span>
        <input
          type="password"
          name="pass"
          id="pass"
          className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
          placeholder="password"
        />
      </div>
      <div className="flex justify-between w-full py-4">
        <Link to="/resetpassword" className="font-bold text-md">Forgot password</Link>
      </div>
      <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
        Sign in
      </button>
      <button type="button" className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
        <img src={gle} alt="img" className="w-6 h-6 inline mr-2" />
        Sign in with Google
      </button>
      <div className="text-center text-gray-400">
        Dont have an account?{" "}
        <span className="font-bold text-black">
          <Link to="/registerc" className="font-bold text-black">
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
