import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  console.log("imagehostkey", imageHostKey);

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["title"],
    queryFn: async () => {
      const res = await fetch(
        "https://car-hut-server-gilt.vercel.app/brandsSelect"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (isLoading) {
          <Loading></Loading>;
        }
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            title: data.title,
            categoryid: data.categoryid,
            img: imgData.data.url,
            location: data.location,
            resaleprice: data.resaleprice,
            originalprice: data.originalprice,
            useyear: data.useyear,
            sellername: data.name,
          };
          console.log(product);
          fetch("https://car-hut-server-gilt.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);

              toast.success(`product added successfully`);
              navigate("/dashboard/manageproduct");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add a Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        {/* brands */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Brands</span>
          </label>
          <select
            {...register("categoryid")}
            className="select input-bordered w-full max-w-xs"
          >
            <option value="6380a755ea67f24e0748b41a">Toyota</option>
            <option value="6380a755ea67f24e0748b41b">Suzuki</option>
            <option value="6380a755ea67f24e0748b41c">Honda</option>
            {/* {specialties.map((title) => (
              <>
                <option key={title._id} value={title.name}>
                  {title.name}
                </option>
              </>
            ))} */}
          </select>
        </div>
        {/* name field */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Car Name</span>
          </label>
          <input
            type="text"
            {...register("title", {
              required: "carname is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* name field */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "originalprice is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* originalprice field */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            {...register("originalprice", {
              required: "originalprice is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* resaleprice */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="number"
            {...register("resaleprice", {
              required: "Resale Price is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* useYear */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Use year</span>
          </label>
          <input
            type="number"
            {...register("useyear", {
              required: "useyear is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* photo field */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is required" })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
