import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { data: blog } = useQuery("blog", () =>
    fetch(`https://anchor-tools.herokuapp.com/news/${id}`).then((res) => res.json())
  );
  return (
    <div className="my-10">
      <div className="max-w-[800px] w-[90%] mx-auto">
        <h2 className="font-mono text-2xl md:text-3xl py-3">{blog?.title}</h2>
        <p className="text-secondary">
          <small>{blog?.name}</small>
        </p>
        <p className="pt-3">{blog?.body}</p>
      </div>
    </div>
  );
};

export default Blog;
