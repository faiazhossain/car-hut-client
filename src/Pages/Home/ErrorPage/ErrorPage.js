import React from "react";
import { Link } from "react-router-dom";
import error from "../../../Assets/Error404.jpg";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div className="error-container relative text-center">
      <img className=" mx-auto h-screen" src={error} alt="" />
      <div className="absolute top-11 left-10 md:left-1/3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-mono mt-4">
          Page Not Found!!!!
        </h1>

        <h3 className="mt-8">
          You might trying to access wrong address!!
          <br /> Please Check the URL or go to <br />
          <Link className="btn btn-secondary w-1/3 mt-4" to="/">
            Home
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default ErrorPage;
