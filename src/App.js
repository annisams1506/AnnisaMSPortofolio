import React from "react";
import Navbar from "./component/Navbar"; // Pastikan path ini sesuai lokasi file Navbar.js
import Side1 from "./component/Side1";
import Pageproject from "./component/Pageproject";
import Pageexperience from "./component/Pageexperience";
import Pageskills from "./component/Pageskills";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Side1/>
      <Pageproject/>
      <Pageexperience/>
      <Pageskills/>
      
      
     
      <Footer/>
    </div>
  );
}

export default App;
