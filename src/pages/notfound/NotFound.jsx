import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useNavigate } from "react-router-dom"; 

const NotFound = () => {
  const navigate = useNavigate(); 

  return (
    <div className="container text-center d-flex align-items-center justify-content-center vh-100">
      <div>
        <h1 className="display-1 fw-bold" style={{color:"#FCD980"}}>404</h1>
        <h3 className="fw-bold text-dark">Upss... Halaman Tidak Ditemukan</h3>
        <p className="text-muted">
          Mohon maaf, halaman yang anda buka tidak ditemukan <br />
          Pastikan URL yang anda masukkan benar
        </p>
        <button
          className="btn px-4 py-2 fw-bold"
          onClick={() => navigate("/")}
          style={{backgroundColor:"#FCD980"}}
        >
          Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
