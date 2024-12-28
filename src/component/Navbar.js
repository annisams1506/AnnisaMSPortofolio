import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">MyPortfolio</Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          <li>
            <Link
              to="/"
              className="hover:underline hover:text-gray-200 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:underline hover:text-gray-200 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="hover:underline hover:text-gray-200 transition"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline hover:text-gray-200 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-500 focus:ring-white"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <ul
          id="mobile-menu"
          className="absolute top-16 left-0 w-full bg-indigo-500 hidden flex flex-col items-center space-y-4 py-4 md:hidden"
        >
          <li>
            <Link
              to="/"
              className="text-white text-lg hover:underline hover:text-gray-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white text-lg hover:underline hover:text-gray-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="text-white text-lg hover:underline hover:text-gray-200"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg hover:underline hover:text-gray-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
