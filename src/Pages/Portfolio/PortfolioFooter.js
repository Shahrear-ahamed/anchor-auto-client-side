import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const PortfolioFooter = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="bg-dark border-t-2 ">
        <div className="py-3 container mx-auto px-5 flex justify-between items-center border-gray-500">
          <p>&copy; {date} Shahrear ahamed. All rights reserved</p>
          <div>
            <ul className="text-gray-700 flex space-x-5 text-3xl">
              <li>
                <a href="https://www.facebook.com/its.shahrear/" target="blank">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="https://github.com/Shahrear-ahamed" target="blank">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shahrear-ahamed/"
                  target="blank"
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFooter;
