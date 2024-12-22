import React from 'react';


function Pageexperience() {
  const experiences = [
    {
        title: "HRGA Intern",
        company: "PT. Supernova Flexible",
        duration: "Jan 2020 - March 2020",
        description:
          "Developed a Recruitment Application using VB.NET as a final project. Entered and maintained employee attendance and absence records accurately  Managed incoming phone calls and directed them to the appropriate departments."  
           },
      {
        title: "IT Software Development Trainee",
        company: "BBVP Bekasi",
        duration: "February 2022 - May 2022",
        description:
          "Completed a non-boarding training program with 340 instructional hours focused on software development.",
      },
      {
        title: "Top 10 Finalist Website Project - Kompetensi ASIK (Inovasi dan Keberlanjutan Sektor Kelautan)",
        company: "Universitas Pendidikan Indonesia (UPI) Kampus Serang",
        duration: "2024",
        description:"Bekerja dalam tim beranggotakan tiga orang untuk mengembangkan website Soulafish, sebuah platform berbasis webGIS yang merekomendasikan lokasi penangkapan ikan dengan memanfaatkan data suhu, klorofil, dan hasil tangkapan ikan.",
      },
      {
        title: "Journal Publication",
        company: "Optimisasi Produksi Budidaya Perikanan Di Provinsi Nusa Tenggara Timur Melalui Klasterisasi Menggunakan Algoritma K-Means ",
        duration: "Simpatik: Jurnal Sistem Informasi Dan Informatika. December, 2024",
        description:
          "Salah satu penulis dalam tim tiga orang yang menerbitkan penelitian tentang penerapan algoritma K-Means untuk optimisasi produksi budidaya perikanan di Nusa Tenggara Timur."      },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-8">
         MY Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-indigo-400"
            >
              <h3 className="text-2xl font-semibold text-indigo-600">
                {exp.title}
              </h3>
              <p className="text-gray-600 italic">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pageexperience;
