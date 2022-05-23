import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdMail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import Amex from "../../Assets/weAccept/amex.svg";
import Visa from "../../Assets/weAccept/visa.svg";
import MasterCard from "../../Assets/weAccept/mc.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/** section add  one*/}
        <div className="font-normal">
          <h3 className="text-2xl pb-3 font-semibold">Contact Us</h3>
          <p>
            <RiPhoneFill className="mr-1 inline-block" /> (+880) 1234567891
          </p>
          <p>
            <MdMail className="mr-1 inline-block" /> mailanchorauto@contact.com
          </p>
          <p>
            <GoLocation className="mr-1 inline-block" /> Mirpur-1216, Dhaka,
            Bangladesh
          </p>
        </div>
        {/* section two add  */}
        <div>
          <h3 className="text-2xl pb-3 font-semibold">My Account</h3>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard/my-profile">My account</Link>
            </li>
            <li>
              <Link to="/dashboard/checkout">Check out</Link>
            </li>
          </ul>
        </div>

        {/* section three add  */}
        <div>
          <h3 className="text-2xl pb-3 font-semibold">About site</h3>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
        {/* section three add  */}
        <div>
          <h3 className="text-2xl pb-3 font-semibold">We accept</h3>
          <div className="flex space-x-3">
            <img
              className="w-[50px] rounded-sm"
              src={MasterCard}
              alt="mastercard"
            />
            <img className="w-[50px] rounded-sm" src={Visa} alt="visa card" />
            <img className="w-[50px] rounded-sm" src={Amex} alt="amex card" />
          </div>
        </div>
      </div>
      <div className="bg-orange-400 h-[2px]"></div>

      {/* footer bottom are here */}
      <div className="container mx-auto py-3 flex justify-between">
        <p>&copy;{year} All right reserved by Anchor auto</p>
        <ul className="text-gray-600 text-xl flex items-center space-x-5">
          <li>
            <Link to="">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
