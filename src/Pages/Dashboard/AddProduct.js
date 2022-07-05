import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const imageApi = "ba4ff4edefd1c59c93a156adaaba5a42";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((upload) => {
        if (upload.success) {
          const product = {
            name: data.productName,
            img: upload.data.url,
            price: data.price,
            quantity: data.quantity,
            desc: data.desc,
            minOrder: data.minOrder,
          };
          fetch(`https://anchor-tools.herokuapp.com/product`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success("Update successfully");
                reset()
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="dashboard-title">Add New Brand product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-20">
        <div className="form-control  w-full md:max-w-md">
          <label className="label">
            <span className="label-text">
              Product name? <span className="text-red-700 text-xl">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            {...register("productName", {
              required: {
                value: true,
                message: "Product Name is required",
              },
            })}
          />
          <label className="label">
            {errors.productName?.type === "required" && (
              <span className="label-text text-red-600">
                {errors.productName.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full md:max-w-md">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            accept="image/*"
            placeholder="price"
            name="img"
            className="input input-bordered"
            {...register("img", {
              required: {
                value: true,
                message: "Product image is required",
              },
            })}
          />
          <label className="label">
            {errors.img?.type === "required" && (
              <span className="label-text text-red-600">
                {errors.img.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control  w-full md:max-w-md">
          <label className="label">
            <span className="label-text">Minimum Order</span>
          </label>
          <label className="input-group">
            <span>Order</span>
            <input
              type="text"
              name="minOrder"
              placeholder="Minimum order"
              className="input input-bordered"
              {...register("minOrder", {
                required: {
                  value: true,
                  message: "Minimum Order is required",
                },
              })}
            />
            <label className="label">
              {errors.minOrder?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.minOrder.message}
                </span>
              )}
            </label>
          </label>
        </div>
        <div className="form-control  w-full md:max-w-md">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <label className="input-group">
            <span>Price</span>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered w-full"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.price.message}
                </span>
              )}
            </label>
          </label>
        </div>
        <div className="form-control  w-full md:max-w-md">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <label className="input-group">
            <span>Quantity</span>
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              className="input input-bordered w-full"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is required",
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text text-red-600">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </label>
        </div>
        <div className="form-control  w-full md:max-w-md">
          <label className="label">
            <span className="label-text">Product Desc</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 w-full"
            name="desc"
            placeholder="Product desc"
            {...register("desc", {
              required: {
                value: true,
                message: "Description are required",
              },
            })}
          ></textarea>
          <label className="label">
            {errors.desc?.type === "required" && (
              <span className="label-text text-red-600">
                {errors.desc.message}
              </span>
            )}
          </label>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="py-1 px-3 bg-secondary text-white hover:bg-black rounded-sm mt-5 duration-200"
        />
      </form>
    </div>
  );
};

export default AddProduct;
