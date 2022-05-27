import React from "react";
import UseDataLoad from "../../Hooks/UseDataLoad";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [orders, isLoading] = UseDataLoad();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="dashboard-title">Add Review</h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Order status</th>
              <th>Write a review</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.orderStatus}</td>
                <td>
                  {order.orderStatus === "delivered" ? (
                    <button className="bg-secondary text-white py-1 px-4 rounded-sm">
                      Write a review
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-500 text-white py-1 px-4 rounded-sm"
                      disabled="disabled"
                    >
                      Wait for order delivery
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddReview;
