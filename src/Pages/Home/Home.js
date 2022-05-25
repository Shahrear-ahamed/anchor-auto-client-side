import React from "react";
import Blogs from "./Blogs";
import Hero from "./Hero";
import MadeBy from "./MadeBy";
import TrustedBy from "./TrustedBy";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <MadeBy />
      <Blogs />
    </div>
  );
};

export default Home;
