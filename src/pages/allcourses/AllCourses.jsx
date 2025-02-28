import React from 'react';
import EdufreeNavbar from '../../components/navbar/Navbar';
import BreadcrumbComponent from '../../components/breadcrumb/Breadcrumb';
import Footer from '../../components/footer/Footer';
import CategoryFilter from '../../components/categoryfilter/CategoryFilter';
import CoursesList from '../../components/courselist/CoursesList';
import CTASection from '../../components/ctasection/CTASection';
import '../style.css';
const AllCourses = () => {
  return (
    <div className="containerPage">
        <EdufreeNavbar />
        <BreadcrumbComponent items={["Home /", "kursus"]} />
        <CategoryFilter />
        <CoursesList/>
        <CTASection/>
        <Footer/>
    </div>
  );
}

export default AllCourses;
