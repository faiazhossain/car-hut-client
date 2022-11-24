import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="card bg-primary shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
      <button className="btn btn-dark w-1/2 mx-auto mb-4">
        see {name} cars
      </button>
    </div>
  );
};

export default Service;
