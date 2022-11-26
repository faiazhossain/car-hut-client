import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import BrandCard from "./BrandCard";

const Brands = () => {
  const allCars = useLoaderData();
  const [booking, setBooking] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4">
      {allCars.map((singleCar) => {
        return (
          <BrandCard
            key={singleCar._id}
            setBooking={setBooking}
            singleCar={singleCar}
          ></BrandCard>
        );
      })}
      {booking && <BookingModal booking={booking}></BookingModal>}
    </div>
  );
};

export default Brands;
