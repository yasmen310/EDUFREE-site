import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/blogSlice";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const BlogList = () => {
  const dispatch = useDispatch();
  const { loading, blogs, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <Container className="my-4 py-5">
      {loading && (
        <div className="d-flex justify-content-center">
          <ClipLoader color="#007bff" size={50} />
        </div>
      )}
      {error && <p className="text-danger">Error: {error}</p>}
      {!loading && !error && blogs.length > 0 && (
        <Row>
          <Col md={8}>
            <Card className="mb-3">
              <Link to={`/blog/${blogs[0].id}`}>
                <Card.Img
                  variant="top"
                  src={blogs[0].image}
                  alt="Main Blog"
                  style={{ height: "500px", cursor: "pointer" }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{blogs[0].title}</Card.Title>
                <Card.Text>{blogs[0].body.slice(0, 250)}...</Card.Text>
                <Link
                  to={`/blog/${blogs[0].id}`}
                  className="text-decoration-none fw-bold pb-5"
                >
                  Selengkapnya →
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            {blogs.slice(1).map((blog) => (
              <Row key={blog.id} className="mb-3">
                <Col xs={4}>
                  <Link to={`/blog/${blog.id}`}>
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="img-fluid rounded"
                      style={{ cursor: "pointer", height: "100px" }}
                    />
                  </Link>
                </Col>
                <Col xs={8}>
                  <h6>{blog.title.slice(0, 30)}</h6>
                  <p className="text-muted small">
                    {blog.body.slice(0, 140) || "Unknown Date"}
                  </p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BlogList;
