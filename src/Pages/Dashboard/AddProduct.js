import React from "react";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const imageApi = "ba4ff4edefd1c59c93a156adaaba5a42";

    const name = e.target.name.value;
    const img = e.target.img.files;
    const price = parseInt(e.target.price.value);
    const quantity = parseInt(e.target.quantity.value);
    const desc = e.target.desc.value;
    const minOrder = parseInt(e.target.minOrder.value);

    // make image upload data
    const image = img;
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const productData = {
            name,
            img: data.data.url,
            price,
            quantity,
            desc,
            minOrder,
          };
          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(productData),
          })
            .then((res) => res.json())
            .then((result) => console.log(result));
        }
      });
  };
  return (
    <div>
      <h2 className="dashboard-title">Add New Brand product</h2>
      <form onSubmit={handleAddProduct} className="mb-10">
        <div className="form-control  w-full md:max-w-md">
          <label className="label">
            <span className="label-text">
              Product name? <span className="text-red-700 text-xl">*</span>
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
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
          />
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
            />
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
            />
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
            />
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
          ></textarea>
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
