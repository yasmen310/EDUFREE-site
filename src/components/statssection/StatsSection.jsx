import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUsers, faBox, faHourglassHalf, faBolt } from "@fortawesome/free-solid-svg-icons";
import "./StatsSection.css";

const iconMap = {
  "fa-book": faBook,
  "fa-users": faUsers,
  "fa-box": faBox,
  "fa-hourglass-half": faHourglassHalf,
  "fa-bolt": faBolt
};

const StatsSection = () => {
  const [stats, setStats] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/stats")
      .then(response => setStats(response.data))
      .catch(error => console.error("Error fetching stats:", error));

    axios.get("http://localhost:5000/partners")
      .then(response => setPartners(response.data))
      .catch(error => console.error("Error fetching partners:", error));
  }, []);

  return (
    <section className="stats-section py-5 bg-light">
      <div className="container d-flex justify-content-around">
        <div className="row text-center">
          {stats.map(stat => (
            <div key={stat.id} className="col-md-4">
              <h3 className="fw-bold">{stat.value}</h3>
              <p style={{fontSize:"13px"}}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="row text-center justify-content-center">
          {partners.map(partner => (
            <div key={partner.id} className="col-md-2 d-flex align-items-center justify-content-center mx-2">
              <FontAwesomeIcon icon={iconMap[partner.icon]} className="partner-icon me-2" />
              <strong>{partner.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
