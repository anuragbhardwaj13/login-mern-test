import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    errors: {},
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: user.email,
      password: user.password,
    };
    console.log(newUser);
  }
  const { errors } = user;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="mb-4 mt-4 ">
        <h1 className="text-2xl">
          <span className="font-bold">Login</span> below
        </h1>
        <p>
          Are you new here?{" "}
          <span className="text-blue-700">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </div>

      <form className=" w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start  mb-6">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            error={errors.email}
            onChange={(e) => handleChange(e)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-sm py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
          />
        </div>
        <div className="flex flex-col items-start  mb-6">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            error={errors.password}
            onChange={(e) => handleChange(e)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-2/6 bg-blue-500 text-white p-2 border-blue-500 border-solid border-2 rounded-lg hover:bg-blue-100 hover:border-blue-200 hover:text-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
