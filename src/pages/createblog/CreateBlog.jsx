import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      const newBlog = {
        id: Date.now(),
        title,
        body,
        image: reader.result,
      };
  
      const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
      localStorage.setItem('blogs', JSON.stringify([...existingBlogs,newBlog]));

      navigate('/allblogs'); 
    };
  };

  
  

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Card className="p-4 shadow-lg w-50" style={{ backgroundColor: '#1C1E53 '}}>
        <h2 className="text-center mb-4 text-light">Create New Blog</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className='bg-transparent'
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-light">Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter blog content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className='bg-transparent'
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-light">Upload Image</Form.Label>
            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} className='bg-transparent'/>
          </Form.Group>

          <Button variant="" type="submit" className="w-100" style={{backgroundColor:"#FCD980"}}> 
            Publish Blog
          </Button>
        </Form>
      </Card>
     </Container>
  );
};

export default CreateBlog;
