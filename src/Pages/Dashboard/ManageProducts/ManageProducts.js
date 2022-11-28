import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageProducts = () => {
  const { data: products } = useQuery({
    queryKey: "products",
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://car-hut-server-gilt.vercel.app/products",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  return (
    <div>
      <h2 className="text-3xl">Manage Products: {products?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Img</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Resale Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <div className="w-24 rounded-xl">
                    <img src={product.img} />
                  </div>
                  <td>{product.title}</td>
                  <td>{product.sellername}</td>
                  <td>{product.resaleprice}</td>
                  <td className="btn btn-warning">delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
