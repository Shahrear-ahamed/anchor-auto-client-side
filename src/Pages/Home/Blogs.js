import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="bg-[#24201f] text-white py-10">
      <div className="container w-[90%] mx-auto ">
        <h2 className="text-4xl pb-3 font-semibold inline-block border-b-2 border-b-secondary">
          Blogs & News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <h2 className="text-2xl font-mono min-h-[70px]">{blog.title}</h2>
              <p className="font-sans">{blog.body.slice(0, 200)} ...</p>
              <button
                onClick={() => navigate(`blog/${blog._id}`)}
                className="px-6 py-2 bg-secondary text-white font-medium mt-8 hover:mt-7 duration-200"
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
