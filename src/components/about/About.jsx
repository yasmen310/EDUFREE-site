import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from '../../assets/IMGS/unsplash_vbxyFxlgpjM (1).png';
const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h6 className="text-muted">Tentang Kami</h6>
          <h2 className="fw-bold">
            EDUFREE Layanan E-Learning <br /> Gratis Untuk Membantu Kamu
            Bertumbuh
          </h2>
          <p className="text-muted">
            Edufree diharapkan bisa menjadi layanan yang bermanfaat bagi
            kedepannya dalam bidang pendidikan.
          </p>
        </Col>
        <Col md={6}>
          <img
            src={image}
            alt="E-learning team"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
