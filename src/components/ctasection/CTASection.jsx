import React from "react";
import { Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const CTASection = () => {
  return (
    <div className="cta-section text-center py-5">
      <Container>
        <h2 className="fw-bold">Jangan Lewatkan Kesempatan<br />Mari Ciptakan Sesuatu!</h2>
        <p className="text-muted">Yu akses kelas gratisnya, dengan cara klik button dibawah ini</p>
        <Link to="/coursesuccess" className="btn mt-3" style={{backgroundColor:"#FCD980",border:"1px solid #FCD980",color:"black"}}>IKUTI KURSUS</Link>
      </Container>
    </div>
  );
};

export default CTASection;
