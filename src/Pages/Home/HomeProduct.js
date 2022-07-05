import React from "react";
import { useQuery } from "react-query";
import Products from "../Product/Products";
import Loading from "../Shared/Loading";

const HomeProduct = () => {
  const { data: tools , isLoading} = useQuery("homeProduct", () =>
    fetch("https://anchor-tools.herokuapp.com/homeproduct").then((res) => res.json())
  );
  if(isLoading){
      return <Loading />
  }
  return (
    <section name="tools" className="container w-[90%] mx-auto py-5">
      <h2 className="text-3xl font-semibold my-5 pb-3 inline-block border-b-2 border-b-secondary">Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-center items-center max-w-[1000px] w-[90%] mx-auto my-5">
        {tools.map((tool) => (
          <Products key={tool._id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default HomeProduct;
