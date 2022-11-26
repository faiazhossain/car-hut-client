import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ booking }) => {
  const {
    title,
    img,
    location,
    resaleprice,
    originalprice,
    useyear,
    sellername,
  } = booking;

  const {
    register,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex items-center">
            <div className="mr-10">
              <h3 className="text-sm font-bold mb-2">Product Name:</h3>
              <h3 className="text-sm font-bold">Price:</h3>
            </div>
            <div>
              <h3 className="text-md font-bold mb-2">{title}</h3>
              <h3 className="text-md font-bold">Tk {originalprice} lac</h3>
            </div>
          </div>
          {/* Form */}

          <form>
            <div className="form-control w-full">
              {/* email portion */}
              <label className="label">
                <span className="label-text">Name of the Buyer</span>
              </label>
              <input
                type="name"
                value={user?.displayName}
                disabled
                className="input input-bordered w-full "
                {...register("name")}
              />
            </div>

            {/* email portion */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>

              <input
                type="email"
                value={user?.email}
                disabled
                className="input input-bordered w-full"
                {...register("email", {})}
              />
            </div>

            {/* phone number portion */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="tel"
                className="input input-bordered w-full"
                {...register("contact", {})}
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("location", {})}
              />
            </div>
            <input
              className="btn btn-accent w-full mt-6"
              value="Login"
              type="submit"
            />
          </form>

          {/* Form */}
        </div>
      </div>
    </>
  );
};

export default BookingModal;
