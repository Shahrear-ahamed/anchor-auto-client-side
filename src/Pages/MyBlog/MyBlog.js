import React from "react";

const MyBlog = () => {
  return (
    <div className="container mx-auto py-10 space-y-5">
      {/* question number one */}
      <div className="collapse shadow-lg w-[90%] max-w-2xl mx-auto rounded-lg border-2 border-gray-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2 className="text-xl">
            1. How will you improve the performance of a React Application?
          </h2>
        </div>
        <div className="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
      {/* question number two */}
      <div className="collapse shadow-lg w-[90%] max-w-2xl mx-auto rounded-lg border-2 border-gray-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2 className="text-xl">
            2. What are the different ways to manage a state in a React
            application?
          </h2>
        </div>
        <div className="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
      {/* question number three */}
      <div className="collapse shadow-lg w-[90%] max-w-2xl mx-auto rounded-lg border-2 border-gray-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2 className="text-xl">
            3. How does prototypical inheritance work?
          </h2>
        </div>
        <div className="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
      {/* question number four */}
      <div className="collapse shadow-lg w-[90%] max-w-2xl mx-auto rounded-lg border-2 border-gray-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2 className="text-xl">
            4. Why you do not set the state directly in React. For example, if
            you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts
          </h2>
        </div>
        <div className="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
      {/* question number five */}
      <div className="collapse shadow-lg w-[90%] max-w-2xl mx-auto rounded-lg border-2 border-gray-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2 className="text-xl">
            5. You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
        </div>
        <div className="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
      {/* question number six */}
      <div className="collapse shadow-lg w-[90%] max-w-2xl mx-auto rounded-lg border-2 border-gray-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2 className="text-xl">
            6. What is a unit test? Why should write unit tests?
          </h2>
        </div>
        <div className="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
