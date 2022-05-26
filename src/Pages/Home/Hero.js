import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section>
      <div className="min-h-[85vh] h-full banner flex flex-col justify-center items-center">
        <div>
          <h2 className="text-3xl md:text-6xl text-white text-center font-bold">
            UNMATCHED EFFICIENCY.{" "}
            <span className="block text-red-600 mt-[-10px]">
              {" "}
              UNRIVALED PERFORMANCE.
            </span>{" "}
          </h2>
          <p className="px-10 py-4 text-white text-center text-base md:text-2xl">
            Industry-leading rotary vane compressors for commercial, industrial,
            OEM & transit applications.
          </p>
        </div>
        <div className="relative h-[50px]">
          <Link to="tools" duration={500} smooth={true}>
            <AiOutlineArrowDown className="text-white text-5xl absolute -bottom-5 cursor-pointer md:-bottom-20 mb-10 md:mb-0 left-2/4 -translate-x-2/4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
