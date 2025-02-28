import React from "react";
// import { useNavigate } from "react-router-dom";
import EdufreeNavbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/herosection/HeroSection';
import StatsSection from '../../components/statssection/StatsSection';
import BenefitsSection from '../../components/benefitssection/BenefitsSection';
import About from '../../components/about/About';
import RecommendedCourses  from '../../components/recommendedcourses/RecommendedCourses';
import TestimonialSection from "../../components/testimonialsection/TestimonialSection";
import FAQSection from "../../components/FAQsection/FAQSection";
import Footer from "../../components/footer/Footer";
import '../style.css';
const Home = () => {
  return (
    <div className="containerPage">
      <EdufreeNavbar/>
      <HeroSection/>
      <StatsSection/>
      <BenefitsSection/>
      <About />
      <RecommendedCourses />
      <TestimonialSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
};

export default Home;
