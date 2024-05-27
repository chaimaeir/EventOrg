import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import registerImage from "../../../assets/images/register.png";
import { registerProvider } from "../../../redux/actions/AuthActions.js/index";

const RegisterP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [formErrors, setFormErrors] = useState({});

  const schema = z.object({
    companyName: z.string().nonempty({ message: "Company Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one special character" }),
    confirmPassword: z.string().nonempty({ message: "Confirm Password is required" })
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      setFormErrors({});
      dispatch(registerProvider(formData)).then((result) => {
        if (registerProvider.fulfilled.match(result)) {
          navigate("/loginp");
        }
      });
    } catch (err) {
      setFormErrors(err.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {}));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
              fontSize: "32px"
            }}
          >
            Get Started Now
          </span>

          {error && <p className="text-red-500">{error}</p>}
          <div className="py-3">
            <span className="mb-2 text-md">Company Name</span>
            <input
              type="text"
              className="w-full p-1 border border-gray-300 rounded-xl placeholder-font-light placeholder-text-gray-500"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            {formErrors.companyName && <p className="text-red-500">{formErrors.companyName}</p>}
          </div>
          <div className="py-2">
            <span className="mb-2  text-md">Email</span>
            <input
              type="email"
              className="w-full p-1 border border-gray-300 rounded-xl placeholder-font-light placeholder-text-gray-500"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>
          <div className="py-2">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              className="w-full p-1 border border-gray-300 rounded-xl placeholder-font-light placeholder-text-gray-500"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
          </div>
          <div className="py-2">
            <span className="mb-2 text-md">Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-1 border border-gray-300 rounded-xl placeholder-font-light placeholder-text-gray-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword && <p className="text-red-500">{formErrors.confirmPassword}</p>}
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded-lg mb-5 hover:bg-white hover:text-black hover:border hover:border-gray-300"
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
            src={registerImage}
            alt="img"
            className="w-[400px] h-full hidden rounded-3xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterP;
