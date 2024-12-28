import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"; // Pastikan path sesuai
import landingpage from "./component/LandinPage";
import Footer from "./component/Footer";
import Side1 from "./component/LandinPage";
import Pageproject from "./component/Pageproject";
import Pageexperience from "./component/Pageexperience";
import Pageskills from "./component/Pageskills";
import CardList from "./component/CardList";
import Project1 from "./Project/Project1";
import Card from "./component/Card";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Side1 />} />
          <Route path="/projects" element={<CardList />} />
          <Route path="/experience" element={<Pageexperience />} />
          <Route path="/skills" element={<Pageskills />} />
          <Route path="/cards" element={<CardList />} />
          <Route path="/project/1" element={<Project1 />} />
          {/* Tambahkan route lain jika diperlukan */}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
