import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl mb-5">My Bookings</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Car Brand</th>
              <th>Location</th>
              <th>Name</th>
              <th>Resale Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{booking.title}</td>
                <td>{booking.location}</td>
                <td>{booking.name}</td>
                <td>{booking.resaleprice} lac tk</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
