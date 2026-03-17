import React from "react";
import assets from "../assets/assets";

const AfterSchoolPoster = () => {
  return (
    <div className="w-full flex justify-center bg-slate-100 py-10 px-4">
      <div className="w-full max-w-4xl lg:max-w-3xl xl:max-w-2xl rounded-2xl overflow-hidden shadow-xl">
        <img
          src={assets.afterSchool}
          alt="After School Poster"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AfterSchoolPoster;
