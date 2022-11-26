import React from "react";
import { Link } from "react-router-dom";

const Service = ({ brand }) => {
  const { name, description, img } = brand;
  return (
    <div className="card bg-primary shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
      <Link
        to={`/brands/${brand._id}`}
        className="btn btn-dark w-1/2 mx-auto mb-4"
      >
        see {name} cars
      </Link>
    </div>
  );
};

export default Service;
