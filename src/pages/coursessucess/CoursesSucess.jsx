import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/IMGS/Rectangle 1354 (1).png"
import {Link} from "react-router-dom";

const CourseSuccess = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            src={image}
            alt="Success"
            className="img-fluid rounded"
          />
          <h2 className="fw-bold mt-4">Selamat! Kursus Anda Telah Di Buka</h2>
          <p className="text-muted">
            Kursus yang anda pilih sudah di buka, Silahkan klik button dibawah ini
          </p>
          <Link to="/allcourses"className="btn px-4 py-2 fw-bold" style={{backgroundColor:"#FCD980"}}>
            Buka Kursus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSuccess;
