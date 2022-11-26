import React from "react";

const BrandCard = ({ singleCar, setBooking }) => {
  const {
    title,
    img,
    location,
    resaleprice,
    originalprice,
    useyear,
    sellername,
  } = singleCar;

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-64" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-2">
          <div className="font-bold">
            <p>Name:</p>
            <p>Location:</p>
            <p>Resale Price:</p>
            <p>Original Price:</p>
            <p>Used years:</p>
          </div>
          <div className="font-mono">
            <p>{sellername}</p>
            <p>{location}</p>
            <p>TK: {resaleprice} lac</p>
            <p>TK: {originalprice} lac</p>
            <p>{useyear} years used</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          {/* The button to open modal */}
          <label
            onClick={() => {
              setBooking(singleCar);
            }}
            htmlFor="booking-modal"
            className="btn btn-primary w-full"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
