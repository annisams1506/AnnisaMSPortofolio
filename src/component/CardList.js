import React from "react";
import { useNavigate } from "react-router-dom";
import Foto1 from '../images/alfat.png';
import Foto2 from '../images/soula.png';
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const CardList = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Alfatih Pilar Peradaban",
      description: "Company Profile Alfatih Pilar Peradaban",
      imageUrl: Foto1,
      icon: (
        <>
          <FaReact /> <SiTailwindcss />
        </>
      ),
      buttonText: "See More",
      onClick: () => navigate("/project/1"),
    },
    {
      title: "SoulaFish",
      description: "WEBGIS South Lampung",
      imageUrl: Foto2,
      icon: <FaReact />,
      buttonText: "See More",
      onClick: () => navigate("/project/2"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-white to-blue-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-800">
            MY Projects
          </h1>
          <p className="text-gray-600 mt-2">
            Explore projects.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <div className="flex items-center gap-2 mb-4 text-blue-500">
                  {card.icon}
                </div>
                <button
                  onClick={card.onClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300"
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
