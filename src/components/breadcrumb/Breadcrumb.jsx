import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BreadcrumbComponent.css"; 

const BreadcrumbComponent = ({ items }) => {
  const breadcrumbs = items.map((item) => item.replace("/", "").trim());

  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        {breadcrumbs.map((name, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isHome = index === 0;

          return isLast ? (
            <Breadcrumb.Item active key={name} className="breadcrumb-active">
              {name}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: `/${breadcrumbs.slice(0, index + 1).join("/")}` }}
              key={name}
              className={isHome ? "breadcrumb-home" : "breadcrumb-link"}
              style={{  marginLeft: "110px",textDecoration:"none"}}
            >
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
