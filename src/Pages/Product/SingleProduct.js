import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import OrderNowModal from "./OrderNowModal";

const SingleProduct = () => {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const { data: tool, isLoading } = useQuery("singleProduct", () =>
    fetch(`http://localhost:5000/product/${id}`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const { img, name, price, quantity, minOrder, desc } = tool;
  return (
    <div className="container w-[90%] mx-auto">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-10">
        <div className="sticky top-0">
          <img src={img} alt={`${name} images`} className="mx-auto py-5" />
          <div className="flex justify-center">
            <label
              onClick={() => setModal(true)}
              for="OrderNow-btn"
              class="bg-secondary text-white py-2 px-10 cursor-pointer modal-button"
            >
              Order Now
            </label>
          </div>
        </div>
        <div>
          <div className="border-b-2 border-gray-500 py-2 pl-5">
            <p className="text-2xl">{name}</p>
          </div>
          <div className="">
            <div className="space-y-3 mt-2 border-b-2 border-gray-500 py-2 pl-5">
              <p>
                <span className="inline-block w-32 font-semibold">Price:</span>
                <span className="text-xl text-secondary">$ {price}</span>
              </p>
              <p>
                <span className="inline-block w-32 font-semibold">
                  Quantity:
                </span>
                <span>{quantity}</span>
              </p>
              <p>
                <span className="inline-block w-32 font-semibold">
                  Minimum Order:
                </span>
                <span>{minOrder}</span>
              </p>
            </div>
            <p className="pl-5 py-3">{desc}</p>
          </div>
          {modal && <OrderNowModal setModal={setModal} tool={tool} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
