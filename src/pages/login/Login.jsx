import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import image from '../../assets/IMGS/woman-writing-on.png';
import './login.css';
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== data.email || storedUser.password !== data.password) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password ,try again",
        confirmButtonColor: "#FCD980",
      });
      return;
    }

    localStorage.setItem("auth", "true"); 
    navigate("/allblogs");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-75 shadow-lg rounded overflow-hidden">
        <div
          className="col-md-6 p-5 text-white d-flex flex-column"
          style={{
            background: `linear-gradient(rgba(28, 30, 83, 0.8), rgba(28, 30, 83, 0.8)), 
            url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <h2 className="fw-bold">Selangkah Lebih Dekat Dengan Impianmu</h2>
          <p className="fs-6 pt-3">
            Sebuah layanan E-Learning gratis yang siap membantumu menjadi seorang ahli.
          </p>
        </div>

        <div className="col-md-6 p-5 text-white" style={{ background: "#1A1A50" }}>
          <h3 className="mb-4">Login</h3>
          <p className="">Persiapkan diri untuk masa depan yang penuh dengan bintang</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control bg-transparent text-white"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control bg-transparent text-white"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input bg-transparent" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Simpan info masuk</label>
            </div>

          
            <button type="submit" className="btn w-100 fw-bold" style={{backgroundColor:"#FCD980",color:"#282938"}}>MASUK</button>
          </form>

          <p className="mt-3 text-center">
            Sudah punya akun? <a href="/signup" className="text-warning">Daftar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
