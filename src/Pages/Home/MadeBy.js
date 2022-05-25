import React from "react";

const MadeBy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-52 items-center container w-[90%] mx-auto ">
      <div>
        <h2 className="text-xl md:text-3xl font-semibold">
          With One-click Processing, one laser cutter is able to process
          multiple sheets.
        </h2>
      </div>
      <div className="flex justify-center">
        <iframe
          height="100%"
          src="https://www.youtube.com/embed/tTnXn498F90"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MadeBy;
