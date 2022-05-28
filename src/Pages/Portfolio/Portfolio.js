import React from "react";
import PortfolioFooter from "./PortfolioFooter";
import PortfolioSkills from "./PortfolioSkills";
import PortfolioProject from "./PortfolioProject";
import PortfolioEdu from "./PortfolioEdu";

const Portfolio = () => {
  return (
    <>
      <PortfolioEdu />
      <PortfolioSkills />
      <PortfolioProject />
      <PortfolioFooter />
    </>
  );
};

export default Portfolio;
