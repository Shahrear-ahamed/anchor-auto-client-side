import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const PortfolioTop = () => {
  return (
    <div
      name="home"
      className="w-full md:min-h-[50vh] py-10 md:py-0 flex items-center  bg-dark"
    >
      {/* container part are here */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-primary">Hello, my name is</p>
        <h1 className="text-xl sm:text-6xl font-bold">Shahrear Ahamed</h1>
        <h2 className="text-3xl sm:text-7xl font-bold">
          A React JS Developer.
        </h2>
        <p className="py-4 max-w-[700px]">
          I’m a Front-end developer specializing in building better UX/UI
          concepts. Currently, I’m focused on learning full-stack web
          development.
        </p>
        <div className="flex space-x-8">
          <button className="text-secondary group border-2 border-secondary px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary hover:text-white duration-300 delay-75">
            <div className="flex items-center">
              View My Work's
              <span className="group-hover:rotate-90 duration-200">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTop;
