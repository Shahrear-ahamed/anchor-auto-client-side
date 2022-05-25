import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="min-h-[85vh] h-full banner flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-6xl text-white text-center font-bold">
          UNMATCHED EFFICIENCY. <span className="block text-red-600 mt-[-10px]"> UNRIVALED PERFORMANCE.</span>{" "}
        </h2>
        <p className="px-10 py-4 text-white text-center text-lg md:text-2xl">
          Industry-leading rotary vane compressors for commercial, industrial,
          OEM & transit applications.
        </p>
      </div>
    </div>
  );
};

export default Hero;
