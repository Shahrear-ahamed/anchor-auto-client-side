import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  // menu items are here
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/our-products">Products</Link>
      </li>
      <li>
        <Link to="/my-blog">My Blog</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={() => signOut(auth)}>Log out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <nav className="z-50 navbar bg-base-100 shadow-md justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Anchor Auto
        </Link>
      </div>
      {/* desktop version menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          htmlFor="dashboard"
          tabIndex="0"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
