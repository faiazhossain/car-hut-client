import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const brands = useLoaderData();
  return (
    <div>
      <div>
        <h2 className="text-center text-primary font-bold text-3xl my-6">
          Our Brands
        </h2>
        <div className=" mx-2 lg:mx-0 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <Service key={brand._id} brand={brand}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
