import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import AdminDeleteModal from "./AdminDeleteModal";

const ManageAllProduct = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const {
    data: allProducts,
    isLoading,
    refetch,
  } = useQuery("allProducts", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const handleProductDelete = (id) => {
    const url = `http://localhost:5000/product/${id}`;
    axios
      .delete(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          refetch();
          toast.success("successfully deleted");
          setDeleteModal(null);
        }
      });
  };
  return (
    <div>
      <h2 className="dashboard-title my-5">Mange Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Minimum Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td className="w-32">
                  <img
                    className="w-full"
                    src={product.img}
                    alt={product.name}
                  />
                </td>
                <td>
                  <p>
                    <small>{product.name}</small>
                  </p>
                </td>
                <td>{product.quantity}</td>
                <td>{product.minOrder}</td>
                <td>
                  <label
                    onClick={() => setDeleteModal(product)}
                    htmlFor="adminDeleteModal"
                    className="btn btn-sm border-0 hover:bg-red-600 bg-red-500 text-white"
                  >
                    Cancel
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteModal && (
        <AdminDeleteModal
          deleteModal={deleteModal}
          AdminDeleteModal={handleProductDelete}
        />
      )}
    </div>
  );
};

export default ManageAllProduct;
