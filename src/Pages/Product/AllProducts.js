import React from "react";
import { useQuery } from "react-query";
import Footer from "../Shared/Footer";
import Loading from "../Shared/Loading";
import Products from "./Products";

const AllProducts = () => {
  const { data: products, isLoading } = useQuery("allproducts", () =>
    fetch("https://anchor-tools.herokuapp.com/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-secondary mt-5 text-3xl ml-10">Our All products</h2>
        <div className="w-48 h-[2px] mt-2 mb-10 bg-secondary ml-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-center items-center max-w-[1000px] w-[90%] mx-auto my-5">
          {products.map((tool) => (
            <Products key={tool._id} tool={tool} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
