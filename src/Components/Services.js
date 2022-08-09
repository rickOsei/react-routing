import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <h1>Services</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        doloremque! Tempora, pariatur odio. Quasi blanditiis corrupti totam vel
        esse aliquid, tenetur accusamus aperiam nam voluptate iusto ratione
        error nihil deleniti!
      </div>
      <Link to="/ServiceDetails:id">
        <button>Details</button>
      </Link>
    </>
  );
}

export default Services;
