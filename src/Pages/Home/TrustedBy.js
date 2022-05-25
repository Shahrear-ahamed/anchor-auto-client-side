import React from "react";
import dell from "../../Assets/dell.png";
import cat from "../../Assets/cat.png";
import mahindra from "../../Assets/mahindra.png";
import ruud from "../../Assets/ruud.png";
import CountUp from "react-countup";
import { VscFeedback } from "react-icons/vsc";
import { BsTools, BsFillPeopleFill } from "react-icons/bs";
const TrustedBy = () => {
  return (
    <div className="mt-5 pt-3 pb-5 container w-[90%] mx-auto">
      <h2 className="text-2xl md:text-4xl font-medium text-center text-primary uppercase">
        Millions business trust us
      </h2>
      <div className="w-28 h-1 mx-auto mt-5 mb-10 md:mb-16 bg-secondary"></div>
      <div className="grid grid-cols-3 text-center my-10">
        <div className="text-primary font-medium">
          <BsFillPeopleFill className="mx-auto mb-8 text-[50px]" />
          <span className="text-black font-bold text-4xl">
            <CountUp end={129} duration={3} />+
          </span>
          <p className="text-xl md:text-3xl">Customer</p>
        </div>
        <div className="text-primary font-medium">
          <BsTools className="mx-auto mb-8 text-[50px]" />
          <span className="text-black font-bold text-4xl">
            <CountUp end={10} duration={3} />+
          </span>
          <p className="text-xl md:text-3xl">Tools</p>
        </div>
        <div className="text-primary font-medium">
          <VscFeedback className="mx-auto mb-8 text-[50px]" />
          <span className="text-black font-bold text-4xl">
            <CountUp end={23} duration={3} />+
          </span>
          <p className="text-xl md:text-3xl">Reviews</p>
        </div>
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
