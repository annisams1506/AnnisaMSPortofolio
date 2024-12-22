import React from "react";

const Pageskills = () => {
  const skills = [
    "PHP",
    "JavaScript",
    "HTML",
    "CSS",
    "VBNET",
    "React",
    "Ionic",
    "Codeigniter",
    "MySQL",
    "Git",
    "Figma",
    "ArcGIS",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-full px-6 py-3 text-indigo-600 font-semibold text-lg border border-indigo-300"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg">
            Passionate about expanding my expertise and exploring new technologies to build
            innovative and efficient solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pageskills;
