import React from "react";
import { useNavigate } from "react-router-dom";
import UseDataLoad from "../../Hooks/UseDataLoad";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const navigate = useNavigate();
  const [orders, isLoading] = UseDataLoad();
  if (isLoading) {
    return <Loading />;
  }
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
                      onClick={() => navigate(`/dashboard/payment/${order._id}`)}
                      className="btn btn-sm border-0 hover:bg-red-600 bg-red-500 text-white"
                    >
                      Pay
                    </span>
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

export default MyOrders;
