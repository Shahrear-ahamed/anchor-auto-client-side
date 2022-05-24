import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../Assets/page-error-one.gif";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="minMax z-10 mt-5">
      <div className="md:flex items-center justify-evenly text-center max-w-full w-[90%] mx-auto">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold py-4 md:py-8">We are sorry!</h2>
          <p className="text-lg pb-4">
            You lost connection! we understand. Go to home and explore more
          </p>
          <div className="w-full grid justify-center"></div>
          <button
            onClick={() => navigate("/")}
            className="bg-secondary px-5 py-2 rounded-md text-white"
          >
            Home
          </button>
        </div>
        <div>
          <img src={error} alt="" className="w-[450px]" />
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
