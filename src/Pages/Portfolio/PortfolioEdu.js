import React from "react";

const PortfolioEdu = () => {
  return (
    <div className="w-full flex py-10 items-center bg-dark">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-secondary">
              MySelf
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="space-x-3">
              <span className="block">Hi. I'm</span>
              Shahrear Ahamed
              <span className="inline-block">React JS Developer</span>
            </p>
          </div>
          <div>
            <p>shahrear.ahamed01@gmail.com</p>
            <h2 className="text-xl font-semibold inline-block mt-3 pb-1 border-b-2 border-b-secondary">
              Education
            </h2>
            <p className="mt-3">
              <span className="block">B.S.W Honors (social work)</span>
              <span className="block">Govt. Titumir College</span>
              <span className="block">2019-2023</span>
            </p>
            <p className="mt-3">
              <span className="block">Complete Web development Course</span>
              <span className="block">Front-end Web development</span>
              <span className="block">Jan-21 to Mar-21</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEdu;
