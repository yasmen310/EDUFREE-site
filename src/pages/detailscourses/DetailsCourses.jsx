import React from "react";
import EdufreeNavbar from "../../components/navbar/Navbar";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb";
import CourseDetails from "../../components/coursedetails/CourseDetails";
import Footer from "../../components/footer/Footer";
import CTASection from "../../components/ctasection/CTASection";
import '../style.css';

const DetailsCourses = () => {
  return (
    <div className="containerPage"> 
      <EdufreeNavbar />
      <BreadcrumbComponent items={["Home /", "kursus // Detail Kursus"]} />
      <CourseDetails/>
      <CTASection/>
      <Footer/>
    </div>
  );
};

export default DetailsCourses;
