import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card} from "react-bootstrap";
import CourseDescription from "../../components/coursedescription/CourseDescription"
const CourseDetails = () => {
  const { id } = useParams(); 
  const { courseslist } = useSelector((state) => state.courseslist);
  const course = courseslist.find((c) => c.id === parseInt(id));

  if (!course) {
    return <Container className="mt-5"><h2>Course Not Found</h2></Container>;
  }

  return (
    <Container className="mt-2">
      <Card className="shadow">
        <Card.Img variant="top" src={course.image} alt={course.title} style={{height:"320px"}} />
        <Card.Body className="text-center">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <div className="d-flex justify-content-evenly mt-4">
          <p>🕒 Duration: {course.duration}</p>
          <p>🎥 Videos: {course.videos}</p>
          <p>👨‍🎓 Students: {course.students}</p>
          </div>
        </Card.Body>
        
      </Card>
     <CourseDescription/>

    </Container>
    
  );
};

export default CourseDetails;
