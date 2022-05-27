import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const OrderNow = ({ tool, setModal }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, isLoading] = useAuthState(auth);
  const { _id, name, minOrder, quantity } = tool;
  if (isLoading) {
    return <Loading />;
  }
  // submit form
  const onSubmit = async (data) => {
    const orderDetails = {
      ...data,
      name: user.displayName,
      email: user.email,
      productId: _id,
      productName: name,
      paymentStatus: false,
      orderStatus: "Pending",
      price: tool.price,
    };
    fetch(`http://localhost:5000/order/${user.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(data.message);
          setModal(false);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="OrderNow-btn" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box py-3 px-5">
          <div name="order">
            <label
              htmlFor="OrderNow-btn"
              className="btn btn-sm btn-circle bg-secondary border-0 absolute right-2 top-2 hover:rotate-180 duration-200 text-white hover:text-gray-200"
            >
              ✕
            </label>
            <h3 className="text-2xl font-semibold mb-2">Order Information</h3>
            <div className="w-32 h-[2px] bg-secondary"></div>
            <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  readOnly
                  className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Mobile</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Mobile"
                  {...register("number", {
                    required: {
                      value: true,
                      message: "Number is required",
                    },
                  })}
                  className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
                />
                <label className="label">
                  {errors.number?.type === "required" && (
                    <span className="label-text text-red-600">
                      {errors.number.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Address"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                  })}
                  className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
                />
                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text text-red-600">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Order Quantity</span>
                </label>
                <input
                  type="number"
                  defaultValue={minOrder}
                  placeholder="Your Quantity"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Quantity is required",
                    },
                    max: {
                      value: quantity,
                      message: "You can not buy more then stock",
                    },
                    min: {
                      value: minOrder,
                      message: "You cannot order below the minimum order.",
                    },
                  })}
                  className="input input-bordered w-full px-2 md:px-5 focus:outline-none"
                />
                <label className="label">
                  {(errors.quantity?.type === "required" ||
                    errors.quantity?.type === "max" ||
                    errors.quantity?.type === "min") && (
                    <span className="label-text text-red-600">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="bg-secondary text-white px-7 py-2 cursor-pointer hover:bg-black"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderNow;
