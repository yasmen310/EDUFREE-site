import React from 'react';
import EdufreeNavbar from '../../components/navbar/Navbar';
import BlogDetailsComponent from "../../components/blogdetails/BlogDetailsComponent";
import Footer from '../../components/footer/Footer';
import '../style.css';
const BlogDetails = () => {
  return (
    <div className="containerPage">
      <EdufreeNavbar/>
      <BlogDetailsComponent/>
      <Footer/>
    </div>
  );
}

export default BlogDetails;
