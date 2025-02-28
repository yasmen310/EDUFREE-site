import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import EdufreeNavbar from "../../components/navbar/Navbar";
import '../style.css';
const AccountPage = () => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
    email: "No Email",
  };

  const [user] = useState(storedUser);

  return (
    <div className="containerPage">
    <EdufreeNavbar/>
    <div className="account-bg d-flex align-items-center justify-content-center vh-100">
      <Container>
        <Card className="glass-card text-center p-4 shadow-lg">
          <div className="position-relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbE6u36DvNqhRgUJtDR3MQDBcPkC3n83uXw&s"
              alt="Profile"
              className="rounded-circle border border-3 border-light shadow-lg"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <h3 className="mt-3 fw-bold">{user.name}</h3>
          <p className="text-muted">{user.email}</p>
        </Card>
      </Container>
    </div>
    </div>
  );
};

export default AccountPage;
