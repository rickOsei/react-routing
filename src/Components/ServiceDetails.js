import React from "react";
import { useParams } from "react-router-dom";

function ServiceDetails() {
  const { id } = useParams();
  return (
    <>
      <h1>Service Details of {id}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        doloremque! Tempora, pariatur odio. Quasi blanditiis corrupti totam vel
        esse aliquid, tenetur accusamus aperiam nam voluptate iusto ratione
        error nihil deleniti!
      </div>
    </>
  );
}

export default ServiceDetails;
