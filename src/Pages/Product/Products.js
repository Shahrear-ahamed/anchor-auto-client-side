import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ tool }) => {
  const navigate = useNavigate();
  const { _id, img, name, price, quantity } = tool;
  return (
    <div className="w-full px-4 shadow-md py-7 rounded-md">
      <img src={img} alt={name} className="w-4/5 mx-auto" />
      <h2 className="text-xl h-[70px]">{name}</h2>
      <div className="flex justify-between font-semibold">
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button
        onClick={() => navigate(`product/${_id}`)}
        className="px-6 py-2 bg-secondary text-white font-medium mt-8 hover:bg-black duration-200"
      >
        Order Now
      </button>
    </div>
  );
};

export default Products;
