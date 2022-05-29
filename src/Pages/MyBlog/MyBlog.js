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
          <p>
            Using React in application brings better performance and minimizes
            the number of DOM operations used to build faster user interfaces as
            it was built keeping performance in mind. React applications very
            fast is the DOM, but it sometimes makes many irrelevant components
            render the tree.
          </p>
          <h2 className="text-xl py-3">
            Use a Production build before deployment.
          </h2>
          <p>
            By default, when we run a React app, it gives us many helpful
            warnings, which are very useful for development. For this reason it
            make React app larger and slower, so that's why we should use
            production version when we deploy the app. So for optimize react app
            we should use development mode while working on the React app, and
            production mode is to be used when the app is deployed for the
            users. When we create a production build of the React app, the npm
            run build will create a build directory with a production build of
            the app. Inside this build/static directory, there will be the all
            code and data will appear here.
          </p>
          <h2 className="text-xl py-3">Avoid Anonymous Functions</h2>
          <p>
            the anonymous functions that aren’t assigned an identifier (via
            const/let/var) are not persistent whenever a component inevitably
            gets rendered again. So, as a result of this, instead of allocating
            a single piece of memory only once, like when named functions are
            being used, JavaScript allocates new memory each time this component
            is re-rendered.
          </p>
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
          <p>There are many ways to manage a state in react application</p>
          <ul className="pl-5">
            <li>1. Local state</li>
            <li>2. Global state</li>
            <li>3. Server state</li>
            <li>4. URL state</li>
          </ul>
          <p className="mt-3">
            <span className="bg-gray-300 px-1 mx-1">Local State </span>
            pass data between in one or another component. Best example of local
            state is useState() function
          </p>
          <p className="mt-3">
            <span className="bg-gray-300 px-1 mx-1">Global State </span>
            is share data from one component to another component or passing
            multiple data.
          </p>
          <p className="mt-3">
            <span className="bg-gray-300 px-1 mx-1">Server State </span>
            is are basically used from external server and used for our react UI
            stateData that exists on our URLs, including the pathname and query
            parameters.
          </p>
          <p className="mt-3">
            <span className="bg-gray-300 px-1 mx-1">URL State </span>
            Data that exists on our url, including the pathname and query
            parameters.
          </p>
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
          <p>
            JavaScript is a prototype-based, Object Oriented programming
            language. Sharing amid objects makes for easy inheritance of
            structure , behavior functions or methods, and state. JavaScript is
            the most common of the prototype-capable languages. When used
            appropriately, prototypical inheritance in JavaScript is a powerful
            tool that can save hours of coding. <br />
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            <br />
            It is essential to understand the prototypal inheritance model
            before writing complex code that makes use of it.
          </p>
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
          <p>
            Basically, <span className="text-secondary text-lg">useState</span>{" "}
            is a hook's in react. in this useState hook react run a function.
            here we can input data and we also get instant data. setProducts is
            a function that takes a value (it should be string, boolean, number,
            and object) and returns this value instantly. if we use products =
            [...] it makes a new value of objects or arrays. then we should use
            this new contractor every time. so we can not make clean code and
            reusability, but if we use setProduct it will take a new value every
            time and return a new value.
          </p>
        </div>
      </div>
      {/* question number five */}
      <div className="collapse shadow-lg w-[90%] max-w-2xl mx-auto rounded-lg border-2 border-gray-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h2 className="text-xl">
            5. What is a unit test? Why should write unit tests?
          </h2>
        </div>
        <div className="collapse-content">
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application. That's called units, are
            individually and independently verify proper operation.
          </p>
          <p className="mt-3 py-2">
            There are many benefits of unit testing. These are written below:
          </p>
          <ul className="pl-5">
            <li>1. Quality of Code</li>
            <li>2. Find Software Bugs Easily</li>
            <li>3. Facilitates Change</li>
            <li>4. Debugging Process</li>
            <li>5. Reduce Costs</li>
          </ul>
          <p>mainly that's why we should write units test</p>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
