import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      password2: user.password2,
    };
    console.log(newUser);
  }
  const { errors } = user;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="mb-4 mt-4 ">
        <p className="text-blue-700 font-semibold font-mono">
          <Link to="/">{`←`} get back to Home</Link>
        </p>
        <h1 className="text-2xl">
          <span className="font-bold">Register</span> below
        </h1>
        <p>
          Already have an account?{" "}
          <span className="text-blue-700">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>

      <form className=" w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start  mb-6">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={user.name}
            error={errors.name}
            onChange={(e) => handleChange(e)}
            className="bg-gray-200 text-sm appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
          />
        </div>
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
            className="bg-gray-200 text-sm appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
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
        <div className="flex flex-col items-start  mb-6">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Confirm Password
          </label>
          <input
            type="password"
            id="password2"
            value={user.password2}
            error={errors.password2}
            onChange={(e) => handleChange(e)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-2/6 bg-blue-500 text-white p-2 border-blue-500 border-solid border-2 rounded-lg hover:bg-blue-100 hover:border-blue-200 hover:text-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
