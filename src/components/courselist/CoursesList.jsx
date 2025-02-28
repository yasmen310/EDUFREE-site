import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/courseslistSlice";
import { useNavigate } from "react-router-dom"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

const CoursesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseslist, loading, error } = useSelector((state) => state.courseslist);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Kursus Tersedia</h2>
      {loading && (
        <div className="d-flex justify-content-center">
          <ClipLoader color="#007bff" size={50} />
        </div>
      )}
      {error && <p className="text-danger">Error: {error}</p>}

      {!loading && !error && courseslist.length > 0 ? (
        <Row>
          {courseslist.map((course) => (
            <Col key={course.id} md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={course.image} 
                  alt={course.title} 
                  style={{ cursor: "pointer" }} 
                  onClick={() => navigate(`/courses/${course.id}`)} 
                />
                <Card.Body>
                  <h5>{course.title.slice(0, 15)}</h5>
                  <p className="text-muted small">{course.description}</p>
                  <div className="d-flex justify-content-between">
                    <span>🕒 {course.duration}</span>
                    <span>🎥 {course.videos}</span>
                    <span>👨‍🎓 {course.students}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        !loading && !error && <p>No courses available.</p>
      )}
    </Container>
  );
};

export default CoursesList;
