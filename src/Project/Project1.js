import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineLink } from "react-icons/ai";
import pictures from '../images/alfat.png';

import { Link } from "react-router-dom";

const Project1 = () => {
    return (
        <div className="pb-10">
            {/* Background Image Section */}
            <div
                className="relative mt-10 mx-4 sm:mx-8 md:mx-20 items-center rounded-md h-[500px] shadow-lg"
                style={{
                    backgroundImage: `url(${pictures})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Main Content */}
            <div className="flex mx-4 sm:mx-8 md:mx-20 flex-col mt-6">
                <h1 className="text-4xl font-bold text-gray-800">Proyek Konsultasi PT Alfatih Pilar Peradaban</h1>
                <p className="text-gray-600 mt-2">
                    Written on <span className="font-semibold">11 December 2024</span> by Annisa Maulana Sabilla
                    <br />
                    Last updated on <span className="font-semibold">22 December 2024</span>
                </p>
                
                {/* Links Section */}
                <div className="flex items-center mt-4 space-x-4">
                    <a 
                        href="https://github.com/annisams1506/hexasparkprokon" 
                        className="flex items-center text-gray-800 hover:text-gray-500 transition duration-300"
                        aria-label="Github repository"
                    >
                        <DiGithubBadge className="text-3xl" />
                        <span className="ml-1 font-semibold">Repository</span>
                    </a>

                    <a 
                        href="https://hexasparkprokon.netlify.app/" 
                        className="flex items-center text-gray-800 hover:text-gray-500 transition duration-300"
                        aria-label="Open live site"
                    >
                        <AiOutlineLink className="text-3xl" />
                        <span className="ml-1">Open Live Site</span>
                    </a>
                </div>

                {/* Line Separator */}
                <div className="mt-4 border-t border-gray-300"></div>

                {/* Overview Section */}
                <section className="mt-6">
                    <h2 className="text-2xl font-bold mb-2">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Saya adalah mahasiswa yang sedang mengampu mata kuliah Proyek Konsultasi dan bermitra dengan PT. Alfatih Pilar Peradaban. Dalam proyek ini, saya bertugas untuk membuat website company profile bagi perusahaan tersebut karena mereka sebelumnya belum memiliki platform digital resmi.
                    </p>
                </section>

                {/* Tech Stack Section */}
                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">The Tech Stack</h2>
                    <p className="text-gray-700 leading-relaxed">Proyek ini menggunakan teknologi berikut:</p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li><strong>React.js:</strong> Library JavaScript untuk membangun antarmuka pengguna.</li>
                        <li><strong>Tailwind CSS:</strong> Framework CSS untuk styling yang responsif dan custom.</li>
                        <li><strong>Swiper:</strong> Library populer untuk membuat slider modern.</li>
                    </ul>
                </section>

                {/* Features Section */}
                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">Features</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Website ini dirancang untuk memberikan pengalaman pengguna yang optimal dengan fitur-fitur berikut:
                    </p>
                    <ul className="mt-4 list-disc pl-10 text-gray-700">
                        <li><strong>Navbar:</strong> Terdiri dari menu Home, About, Our Service, Project & Clients, dan Contact.</li>
                        <li><strong>Home:</strong> Landing page dengan slideshow header, pengenalan perusahaan, dan track record.</li>
                        <li><strong>About:</strong> Informasi mendalam tentang sejarah, visi, misi, dan nilai perusahaan.</li>
                        <li><strong>Our Service:</strong> Menu drop-down dengan berbagai layanan perusahaan.</li>
                        <li><strong>Page Port:</strong> Layanan terkait pelabuhan dengan sub-kategori.</li>
                        <li><strong>Project & Clients:</strong> Menampilkan proyek yang telah diselesaikan, seperti TUSK dan TERSUS BUP.</li>
                        <li><strong>Contact:</strong> Formulir kontak untuk komunikasi dengan perusahaan.</li>
                        <li><strong>Footer:</strong> Informasi sosial media dan alamat perusahaan.</li>
                    </ul>
                </section>

                {/* Conclusion Section */}
                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">Kesimpulan</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Fitur-fitur ini dirancang untuk meningkatkan citra profesional PT. Alfatih Pilar Peradaban, sekaligus memperkuat kehadiran digital perusahaan.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Jika tertarik mencoba aplikasi ini, silakan kunjungi <a href="https://alfatihpilarperadaban.netlify.app/" className="text-blue-500 hover:underline">Live Site</a>.
                    </p>
                    <p className="text-gray-700 mt-4">Thanks For Reading!</p>
                </section>

                {/* Back to Other Projects */}
                <div className="mt-6">
                    <Link
                        to="/"
                        className="text-blue-500 hover:underline"
                    >
                        BACK TO OTHER PROJECTS
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project1;
