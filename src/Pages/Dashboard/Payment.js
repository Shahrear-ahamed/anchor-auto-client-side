import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(
  "pk_test_51L1NV5AlO9OJiFpifgfWumRmZDbx7WPDiUH61SCd466UwSPXSdhJdrogfxfJVOa69axIn0mUCM9oRvjP0PkGcTbg00ZM5Ztwxa"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/singleorderitem/${id}`;
  const { data: order, isLoading } = useQuery("order", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const { productName, email, number, name, quantity, price } = order;
  return (
    <div className="my-10 mx-6 space-y-8">
      <div className="card w-50 max-w-md  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-primary my-3 font-semibold text-xl">
            Payment for {productName}
          </h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number: {number}</p>
          <p>Quantity: {quantity}</p>
          <p>Total payable: ${parseInt(quantity) * price}</p>
        </div>
      </div>
      <div className="card w-50 max-w-md flex-shrink-0 shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckOut order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
