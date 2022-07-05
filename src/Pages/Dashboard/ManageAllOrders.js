import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import AdminDeleteOrder from "./AdminDeleteOrder";

const ManageAllOrders = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminDeleteModal, setAdminDeleteModal] = useState(null);
  const [reFetch, setReFetch] = useState(null);
  useEffect(() => {
    const url = "https://anchor-tools.herokuapp.com/order";
    axios(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [reFetch]);
  if (loading) {
    return <Loading />;
  }
  const deliverySubmit = (id) => {
    fetch(`https://anchor-tools.herokuapp.com/delivery/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully delivered");
        setReFetch(!reFetch);
      });
  };
  const productDeleteByAdmin = (id) => {
    const url = `https://anchor-tools.herokuapp.com/order/${id}`;
    axios
      .delete(url, {
        headers: {
          authorization: `Bearar ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Successfully deleted");
          setAdminDeleteModal(null);
          setReFetch(!reFetch);
        }
      });
  };
  return (
    <div>
      <h2 className="dashboard-title my-5">
        Manage All Products {products.length}
      </h2>
      <div className="overflow-x-auto my-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Delivery</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
                <td>
                  {product.paymentStatus ? (
                    <span className="bg-green-500 text-white py-1 px-3">
                      Paid
                    </span>
                  ) : (
                    <span className="bg-warning text-white py-1 px-3">
                      Unpaid
                    </span>
                  )}
                </td>
                <td>{product.orderStatus}</td>
                <td>
                  {product.paymentStatus &&
                    product.orderStatus !== "Delivered" && (
                      <button
                        onClick={() => deliverySubmit(product._id)}
                        className="bg-secondary text-white py-1 px-3"
                      >
                        Delivery
                      </button>
                    )}
                  {!product.paymentStatus &&
                    product.orderStatus !== "Delivered" && (
                      <label
                        onClick={() => setAdminDeleteModal(product)}
                        htmlFor="deleteOrderAdmin"
                        className="btn btn-sm border-0 hover:bg-red-600 bg-red-500 text-white"
                      >
                        Cancel
                      </label>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {adminDeleteModal && (
        <AdminDeleteOrder
          adminDeleteModal={adminDeleteModal}
          productDeleteByAdmin={productDeleteByAdmin}
        />
      )}
    </div>
  );
};

export default ManageAllOrders;
