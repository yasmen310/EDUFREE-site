import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import image from "../../assets/IMGS/unsplash_m_HRfLhgABo.png";
const CourseDescription = () => {
  return (
    <Container className="my-5">
      <Nav variant="underline" defaultActiveKey="#deskripsi" className="mb-4 border-bottom pb-2">
        <Nav.Item>
          <Nav.Link href="#deskripsi" className="text-primary fw-bold">Deskripsi</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#instruktur" className="text-dark">Instruktur</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#silabus" className="text-dark">Silabus</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#prasyarat" className="text-dark">Prasyarat</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#metode-ajar" className="text-dark">Metode Ajar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#testimoni" className="text-dark">Testimoni</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#faq" className="text-dark">FAQ</Nav.Link>
        </Nav.Item>
      </Nav>
      <section id="deskripsi">
        <h3 className="mb-3">Tentang Kursus</h3>
        <p>
          Pemrograman web atau web programming adalah istilah yang berkaitan erat dengan website dan internet. 
          Mengapa begitu? Karena web programming adalah salah satu proses pembuatan website untuk keperluan internet.
          Dalam kursus ini kamu akan diajarkan cara membuat web dengan standar industri, mulai dari HTML, CSS, dan JavaScript.
        </p>
        <h5 className="mt-4">Manfaat belajar pemrograman website:</h5>
        <ul>
          <li>Mampu menjelaskan berbagai spesifikasi dan software</li>
          <li>Dapat membangun website sendiri</li>
          <li>Menunjang karir</li>
        </ul>

        <Row className="my-4 justify-content-center">
          <Col md={10}>
            <img
              src={image}
              alt="Course"
              className="img-fluid rounded shadow-lg"
              style={{ width: "100%", height: "280px" }}
            />
          </Col>
        </Row>
      </section>

      <section id="sasaran">
        <h3 className="mb-3">Target dan Sasaran Siswa</h3>
        <ul>
          <li>Kelas ditujukan untuk siswa dengan rasa keingintahuan tinggi dalam bidang pemrograman website</li>
          <li>Kelas ini memberikan sertifikat ketika siswa menyelesaikan seluruh kursus yang ia pelajari</li>
          <li>Di harapkan siswa bisa melakukan semua tugas yang diberikan di dalam kursus</li>
        </ul>
      </section>

      <section id="spesifikasi">
        <h3 className="mb-3">Spesifikasi & Software</h3>
        <ul>
          <li>PC/Laptop dengan minimal 8 GB RAM dan 2.0 GHz processor</li>
          <li>Browser</li>
          <li>Text Editor (VSCode)</li>
          <li>Akses Internet</li>
        </ul>
      </section>
    </Container>
  );
};

export default CourseDescription;
