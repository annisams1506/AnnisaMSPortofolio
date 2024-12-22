import React from "react";
import AnnisaPhoto from "../images/annisa.jpg"; // Replace with the actual path to the photo

const Side1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-pink-700 mb-4">
          Hi, I'm <span className="text-pink-900"> Annisa Maulana Sabilla!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            As a Marine Information Systems student, I specialize in front-end web
            development using React and UI/UX design with Figma. I enjoy combining
            creative design with modern front-end technologies and utilizing GIS to
            deliver effective, user-friendly, and data-driven solutions.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={AnnisaPhoto}
            alt="Annisa"
            className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-indigo-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Side1;
