import React from "react";
import AnnisaPhoto from "../images/annisa.jpg"; // Replace with the actual path to the photo
import { DiGithubBadge } from "react-icons/di";
import { BiFile } from "react-icons/bi";
import { motion } from "framer-motion"; // For animations

const Side1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 flex items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-pink-700 mb-4">
            Hi, I'm <span className="text-pink-900">Annisa Maulana Sabilla!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            As a Marine Information Systems student, I specialize in front-end web
            development using React and UI/UX design with Figma. I enjoy combining
            creative design with modern front-end technologies and utilizing GIS to
            deliver effective, user-friendly, and data-driven solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <a
              href="cv.pdf"
              download
              className="flex items-center text-gray-800 hover:text-pink-700 transition duration-300"
              aria-label="CV"
            >
              <BiFile className="text-3xl" />
              <span className="ml-2 font-semibold">Download CV</span>
            </a>

            <a
              href="https://github.com/annisams1506/hexasparkprokon"
              className="flex items-center text-gray-800 hover:text-indigo-700 transition duration-300"
              aria-label="Github repository"
            >
              <DiGithubBadge className="text-3xl" />
              <span className="ml-2 font-semibold">GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={AnnisaPhoto}
            alt="Annisa"
            className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-indigo-300 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Side1;
