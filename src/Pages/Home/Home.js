import React from "react";
import Blogs from "./Blogs";
import MadeBy from "./MadeBy";
import TrustedBy from "./TrustedBy";

const Home = () => {
  return (
    <div>
      <div className="container w-[90%] mx-auto ">
        <TrustedBy />
        <MadeBy />
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
