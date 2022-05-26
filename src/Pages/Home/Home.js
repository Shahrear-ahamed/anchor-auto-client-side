import React from "react";
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
    </>
  );
};

export default Home;
