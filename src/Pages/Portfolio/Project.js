import React from "react";

const Project = ({ project }) => {
  const { img, name, theme, live, client, server } = project;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="shadow-lg shadow-dark group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-gray-800 tracking-wider">
            {name}
          </span>
          <div className="pt-8 text-center">
            <a href={live} target="blank">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
            <a href={client} target="blank">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Client
              </button>
            </a>
            {server && (
              <a href={server} target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Server
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="py-3 text-xl text-center">{theme}</p>
      </div>
    </div>
  );
};

export default Project;
