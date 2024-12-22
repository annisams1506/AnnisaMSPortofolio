import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-6 mt-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h4 className="text-lg font-semibold mb-2">Reach Me Out</h4>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:example@example.com"
            className="hover:text-red-300 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaSpotify />
          </a>
        </div>

        {/* Credit Section */}
        <div className="mt-4 text-sm">
          <p>© Annisa Maulana Sabilla</p>
                </div>
      </div>
    </footer>
  );
};

export default Footer;
