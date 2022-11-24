import React from "react";
import brand1 from "../../../Assets/brand1.png";
import brand2 from "../../../Assets/brand2.png";
import brand3 from "../../../Assets/brand3.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      _id: 1,
      name: "Toyota",
      img: brand1,
      description: "Find the Number 1 Brand cars",
    },
    {
      _id: 2,
      name: "Suzuki",
      img: brand2,
      description: "Find the Cheapest cars",
    },
    {
      _id: 3,
      name: "Honda",
      img: brand3,
      description: "Find the Stylish cars",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-center text-primary font-bold text-3xl my-6">
          Our Brands
        </h2>
        <div className=" mx-2 lg:mx-0 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
