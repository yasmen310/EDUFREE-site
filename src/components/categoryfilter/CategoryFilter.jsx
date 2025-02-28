import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./categoryfilter.css";
const categories = [
  "Semua",
  "Tips & Tricks",
  "Event",
  "Berita",
  "Soft Skill",
  "Hard Skill",
  "Tutorial",
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <Container className="mt-4 text-center">
      <Row className="justify-content-center mb-3">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Cari Blog, Event atau Berita . . ."
            className="border border-secondary rounded allblog-input"

          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {categories.map((category) => (
              <span
                key={category}
                className={`fw-bold cursor-pointer ${
                  activeCategory === category ? "text-primary" : "text-secondary"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryFilter;
