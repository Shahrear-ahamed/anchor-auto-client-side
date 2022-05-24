import React from "react";
import dell from "../../Assets/dell.png";
import cat from "../../Assets/cat.png";
import mahindra from "../../Assets/mahindra.png";
import ruud from "../../Assets/ruud.png";
import CountUp from "react-countup";

const TrustedBy = () => {
  return (
    <div className="pt-3 pb-5">
      <h2 className="text-2xl md:text-4xl font-medium text-center uppercase mb-10 md:mb-20">
        Millions business trust us
      </h2>
      <div className="grid grid-cols-3 text-center my-10">
        <h3 className="text-xl md:text-3xl font-medium">
          <CountUp end={129} duration={3} />+<p>Customer</p>
        </h3>
        <h3 className="text-xl md:text-3xl font-medium">
          <CountUp end={10} duration={3} />+ <p>Tools</p>
        </h3>
        <h3 className="text-xl md:text-3xl font-medium">
          <CountUp end={23} duration={3} />k <p>Reviews</p>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mt-5">
        <div className="w-[150px] mx-auto">
          <img src={dell} alt="" />
        </div>
        <div className="w-[150px] mx-auto">
          <img src={cat} alt="" />
        </div>
        <div className="w-[150px] mx-auto">
          <img src={mahindra} alt="" />
        </div>
        <div className="w-[150px] mx-auto">
          <img src={ruud} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
