import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BenefitsSection = () => {
  const [benefits, setBenefits] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => {
        const formattedData = response.data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          description: item.body,
        }));
        setBenefits(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold">Keuntungan Bergabung Dengan</h2>
      <h3 className="fw-bold mb-5">E-Learning EDUFREE</h3>

      <div className="row mx-2">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4 h-100 " style={{backgroundColor:"#F4F6FC"}}>
              <div
                className="badge text-white position-absolute top-0 start-0 translate-middle rounded-circle"
                style={{ width: "40px", height: "40px", lineHeight: "40px",backgroundColor:"#2405F2" }}
              >
                {benefit.id}
              </div>
              <h5 className="mt-3 fw-bold">{benefit.title}</h5>
              <p className="text-muted">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
