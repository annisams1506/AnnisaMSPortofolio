import React from "react";

const Pagecontact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 text-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Find Me On.</h1>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <a
          href="https://github.com/annisams1506"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-lg shadow-lg px-6 py-3 flex items-center justify-center hover:bg-gray-700 transition"
        >
          <i className="fab fa-github mr-2"></i> Github
        </a>
        <a
          href="https://open.spotify.com/user/31ldyuuplqdhtwi4zpwbg6vqkbwi?si=f272a3ef18804046"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-lg shadow-lg px-6 py-3 flex items-center justify-center hover:bg-gray-700 transition"
        >
          <i className="fab fa-spotify mr-2"></i> Spotify
        </a>
        <a
          href="https://instagram.com/annisa._.ms"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-lg shadow-lg px-6 py-3 flex items-center justify-center hover:bg-gray-700 transition"
        >
          <i className="fab fa-instagram mr-2"></i> Instagram
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-lg shadow-lg px-6 py-3 flex items-center justify-center hover:bg-gray-700 transition"
        >
          <i className="fab fa-linkedin mr-2"></i> LinkedIn
        </a>
        <a
          href="mailto:annisa.m.sabilla@gmail.com"
          className="bg-black text-white rounded-lg shadow-lg px-6 py-3 flex items-center justify-center hover:bg-gray-700 transition"
        >
          <i className="fas fa-envelope mr-2"></i> Gmail
        </a>
        <a
          href="https://discord.com/ams1506"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-lg shadow-lg px-6 py-3 flex items-center justify-center hover:bg-gray-700 transition"
        >
          <i className="fab fa-discord mr-2"></i> Discord
        </a>
        
      </div>
    </div>
  );
};

export default Pagecontact;
