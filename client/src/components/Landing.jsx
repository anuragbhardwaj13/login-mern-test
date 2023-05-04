import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="w-full">
      <h1 className="text-center font-mono text-lime-700 text-xl">
        this is an implementation of authentication application to perform Login
        and Register using JWT and Passport
      </h1>
      <h3 className="text-center font-mono text-lime-700 text-xl">
        can be used in any of your application for authentication 🤫
      </h3>
      <div className="flex flex-col justify-center items-center mt-14">
        <p className="text-2xl font-mono font-thin mb-4 text-center">
          are you an old user?
        </p>
        <Link to={"/login"}>
          <button className="bg-blue-500 text-white w-40 p-2 border-blue-500 border-solid border-2 rounded-lg hover:bg-blue-100 hover:border-blue-200 hover:text-blue-600">
            Login
          </button>
        </Link>

        <p className="text-2xl font-mono font-thin mb-4 mt-12 text-center">
          oh, it seems like you're new here
        </p>
        <Link to={"/register"}>
          <button className="bg-blue-500 text-white w-40 p-2 border-blue-500 border-solid border-2 rounded-lg hover:bg-blue-100 hover:border-blue-200 hover:text-blue-600">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
