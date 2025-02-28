import React from 'react';
import { useNavigate } from 'react-router-dom';
import EdufreeNavbar from '../../components/navbar/Navbar';
import BreadcrumbComponent from '../../components/breadcrumb/Breadcrumb';
import Footer from "../../components/footer/Footer";
import CategoryFilter from "../../components/categoryfilter/CategoryFilter";
import BlogList from '../../components/bloglist/BlogList';
import { Button } from "react-bootstrap";
import '../style.css';
const AllBlogs = () => {
  const navigate = useNavigate();
  return (
    <div className="containerPage">
      <EdufreeNavbar />
      <BreadcrumbComponent items={["Home /", "kursus"]} />
      <CategoryFilter />
       <BlogList/>
       <div className="d-flex justify-content-center my-4">
        <Button variant="" size="lg" style={{backgroundColor:"#FCD980"}}onClick={() => navigate("/create-blog")}>
          + Create New Blog
        </Button>
      </div>
      <Footer/>
    </div>
  );
}

export default AllBlogs;
