import React from "react";
import Footer from "../Shared/Footer";
import Blogs from "./Blogs";
import Hero from "./Hero";
import HomeProduct from "./HomeProduct";
import MadeBy from "./MadeBy";
import TrustedBy from "./TrustedBy";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeProduct />
      <TrustedBy />
      <MadeBy />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
