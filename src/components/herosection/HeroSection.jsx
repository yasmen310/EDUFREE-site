import React from "react";
import "./herosection.css";
import { BsArrowRight } from "react-icons/bs";
import image from '../../assets/IMGS/pngtree-hand-drawn-online-education-online-learning-illustration-png-image_1693945-removebg-preview.png';
const HeroSection = () => {
  return (
    <div className="hero-section d-flex align-items-center" style={{backgroundColor:"#1C1E53"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
            <h1 className="fw-bold">Bangun dan Wujudkan Cita <br /> Bersama <span className="highlight">EDUFREE</span></h1>
            <p className="mt-3">
              EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online 
              yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.
            </p>
            <div className="mt-4">
              <button className="btn text-dark fw-bold me-3" style={{backgroundColor:'#FCD980',color:'#282938'}}>Lihat Kursus</button>
              <a href="#" className="btn-link text-white" style={{textDecoration:"none"}}>Lihat Alur Belajar <BsArrowRight className="ms-1" /> </a>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={image}
              alt="Hero Illustration"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
