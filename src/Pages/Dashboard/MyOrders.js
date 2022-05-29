import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UseDataLoad from "../../Hooks/useDataLoad";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";
import ReviewModal from "./ReviewModal";

const MyOrders = () => {
  const navigate = useNavigate();
  const [showModalData, setShowModalData] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [orders, isLoading, refetch] = UseDataLoad();
  if (isLoading) {
    return <Loading />;
  }
  const deleteOrder = (id) => {
    const url = `http://localhost:5000/order/${id}`;
    axios
      .delete(url, {
        headers: {
          authorization: `Bearar ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Successfully deleted");
          setDeleteModal(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="dashboard-title">My Orders</h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Order status</th>
              <th>Payment Status</th>
              <th>Wire Review</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.orderStatus}</td>
                <td>
                  {order.paymentStatus ? (
                    <span className="px-3 py-1 bg-green-500 rounded-lg text-white">
                      Payment done
                    </span>
                  ) : (
                    <span
                      onClick={() =>
                        navigate(`/dashboard/payment/${order._id}`)
                      }
                      className="btn btn-sm border-0 hover:bg-red-600 bg-red-500 text-white"
                    >
                      Pay
                    </span>
                  )}
                </td>
                <td>
                  {order.review ? (
                    <label
                      onClick={() => setShowModalData(order)}
                      htmlFor="review-modal"
                      className="bg-secondary text-white py-1 px-4 rounded-sm cursor-pointer"
                    >
                      Write a review
                    </label>
                  ) : (
                    <button
                      className="bg-yellow-500 text-white py-1 px-4 rounded-sm"
                      disabled="disabled"
                    >
                      Wait for delivery
                    </button>
                  )}
                </td>
                <td>
                  {order.paymentStatus || (
                    <label
                      onClick={() => setDeleteModal(order)}
                      htmlFor="delete-modal"
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
      {showModalData && (
        <ReviewModal
          showModalData={showModalData}
          setShowModalData={setShowModalData}
        />
      )}
      {deleteModal && (
        <DeleteModal deleteModal={deleteModal} deleteOrder={deleteOrder} />
      )}
    </div>
  );
};

export default MyOrders;
