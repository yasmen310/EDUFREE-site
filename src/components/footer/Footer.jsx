import React from "react";
import './footer.css';
const Footer = () => {
  return (
    <>
    <footer className="footer text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="fw-bold">[EDUFREE]</h5>
            <p>Bangun dan wujudkan cita bersama edufree</p>

            <div className="contact-box p-3 mt-5 d-flex justify-content-between">
              <div>
                <small className="d-block fw-bold">Email</small>
                <small>contact@website.com</small>
              </div>
              <div>
                <small className="d-block fw-bold">Telephone</small>
                <small>+6288 999 222 333</small>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold">Sosial Media</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Program</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Merdeka Belajar
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Fintepreneur
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">DUKUNGAN</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>

    
      </div>
    </footer>

    <div className="text-center mt-3 d-flex justify-content-around py-2">
          <small>© Copyright EDUFREE 2021 - 2022</small>
          <div className="footer-links mt-2">
            <a href="#" className="text-black mx-2" style={{textDecoration:"none"}}>
              HOME
            </a>
            <a href="#" className="text-black mx-2" style={{textDecoration:"none"}}>
              TENTANG KAMI
            </a>
            <a href="#" className="text-black mx-2" style={{textDecoration:"none"}}>
              KURSUS
            </a>
            <a href="#" className="text-black mx-2" style={{textDecoration:"none"}}>
              FAQ
            </a>
            <a href="#" className="text-black mx-2" style={{textDecoration:"none"}}>
              BLOG
            </a>
          </div>
        </div>
    </>
  );
};

export default Footer;
