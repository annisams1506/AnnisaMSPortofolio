import React from 'react';
import Data from '../images/alfat.png';
import Soula from '../images/soula.png';
import ionic from '../images/ionic.png';

function Pageproject() {
  const sections = [
    {
      image: Data,
      title: "Website Alfatih",
      content: "Dibuat menggunakan ReactJs dan TailwindCSS.",
    },
    {
      image: Soula,
      title: "SoulaFish",
      content: "Website dengan integrasi ArcGIS untuk analisis data perikanan.",
    },
    {
      image: ionic,
      title: "Front-end using Ionic",
      content: "Aplikasi untuk pembelian ikan dengan teknologi Ionic.",
    },
  ];

  return (
    <div className="pt-16 bg-greenCustom-100/80 pb-24">
      <h1 className="text-white font-cambria font-bold text-3xl text-center mb-12">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={section.image}
              alt={`Project ${section.title}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-cambria font-bold text-secondary mb-2 text-center">
                {section.title}
              </h3>
              <p className="text-gray-700 font-georgia text-justify">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pageproject;
