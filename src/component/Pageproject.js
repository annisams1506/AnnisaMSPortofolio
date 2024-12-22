import React from 'react';
import Data from '../images/alfat.png';
import Soula from '../images/soula.png';
import ionic from '../images/ionic.png';


function Pageproject() {
  const sections = [
    {
      image: Data,
      title: "Website Alfatih",
      content: "ReactJs,  Tailwind"   
     },
    {
      image:   Soula,
      title: "SoulaFish",
      content: "Website dengan integrasi ArcGIS"    },
    {
        image:   ionic,
        title: "Front end using ionic",
        content: "Aplikasi Pembelian Ikan"     },
  ];

  return (
    <div className="pt-[40px]  -mt-10 bg-greenCustom-100/80 pb-24">
      <h1 className="text-white font-cambria font-bold text-3xl text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {sections.map((section, index) => (
          <div key={index} className="transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="border rounded-lg overflow-hidden shadow-lg bg-gray-300">
            <div className="p-6">
                <h3 className="text-2xl font-cambria font-bold text-secondary text-center mb-4">{section.title}</h3>
                <p className="text-black font-georgia text-justify">{section.content}</p>
              </div>
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pageproject;
