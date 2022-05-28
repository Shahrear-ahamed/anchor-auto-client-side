import React, { useEffect, useState } from "react";

const PortfolioSkills = () => {
  const [skillsData, setSkillsData] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkillsData(data));
  }, []);
  return (
    <div
      name="skills"
      className="w-full py-10 md:py-0 flex items-center bg-dark"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-secondary ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="shadow-md shadow-dark rounded-md hover:scale-110 duration-500"
            >
              <img
                className="w-16 pt-4 mx-auto"
                src={skill.img}
                alt="HTML icon"
              />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkills;
