import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/IMGS/woman-writing-on-paper-3228878.png";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    localStorage.setItem("user", JSON.stringify(data));

    Swal.fire({
      title: "Success!",
      text: "Signup successful! Please login.",
      icon: "success",
      confirmButtonColor: "#FCD980",
    }).then(() => {
      navigate("/login");
    });
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
          }}
        >
          <h2 className="fw-bold">Selangkah Lebih Dekat Dengan Impianmu</h2>
          <p className="fs-6 pt-3">
            Sebuah layanan E-Learning gratis yang siap membantumu menjadi
            seorang ahli.
          </p>
        </div>

        <div
          className="col-md-6 p-5 text-white"
          style={{ background: "#1A1A50" }}
        >
          <h3 className="mb-4">Register</h3>
          <p>Persiapkan diri untuk masa depan yang penuh dengan bintang</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control bg-transparent text-white"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control bg-transparent text-white"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control bg-transparent text-white"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn w-100 fw-bold"
              style={{ backgroundColor: "#FCD980", color: "#282938" }}
            >
              DAFTAR
            </button>
          </form>

          <p className="mt-3 text-center">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-warning">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
