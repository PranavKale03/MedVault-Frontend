import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "./context";
import { setLocalStorageValueForKey } from "../../utils/localStorage";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loginType, setLoginType] = useState("DOCTOR");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
    } else {
      const doctorLogin = await login(formData);
      const res = doctorLogin.user;
      if (res) {
        setLocalStorageValueForKey("userId", res._id);
      }
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign In
            </h1>
            <div className="flex justify-between">
              <button
                className={`flex-1 text-sm font-medium px-4 py-2 rounded-l-lg ${
                  loginType === "DOCTOR"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setLoginType("DOCTOR")}
              >
                Doctor
              </button>
              <button
                className={`flex-1 text-sm font-medium px-4 py-2 rounded-r-lg ${
                  loginType === "RECEPTIONIST"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setLoginType("RECEPTIONIST")}
              >
                Receptionist
              </button>
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign In
              </button>
              <p className="text-sm font-light text-gray-500">
                Don't have an account?{" "}
                {/* <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Register
                </a> */}
                <Link to="/signup" className="font-medium text-primary-600 hover:underline">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
