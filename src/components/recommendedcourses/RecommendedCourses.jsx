import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/courseSlice";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { FaClock, FaVideo, FaUsers, FaStar } from "react-icons/fa";

const RecommendedCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Rekomendasi Kursus 
          <br/> Untuk Kamu</h2>
        <Button variant="" className="fw-bold" style={{backgroundColor:"#FCD980"}}>Lihat Semua</Button>
    
      </div>
      <hr/>
      <Row className="mt-4">
        {courses.map((course) => (
          <Col md={4} key={course.id} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={course.image} className="rounded" />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title>{course.title}</Card.Title>
                  <span className="badge bg-dark text-light">
                    <FaStar className="text-warning" /> {course.rating}
                  </span>
                </div>
                <Card.Text className="text-muted">{course.description}</Card.Text>
                <div className="d-flex justify-content-between text-muted">
                  <small><FaClock /> {course.duration}</small>
                  <small><FaVideo /> {course.videos} Video</small>
                  <small><FaUsers /> {course.students} Siswa</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecommendedCourses;
