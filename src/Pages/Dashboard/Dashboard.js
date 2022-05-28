import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import UseAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user?.email);
  return (
    <div className="drawer md:w-11/12 mx-auto md:mt-5 drawer-mobile">
      <input id="dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-11/12 mx-auto md:mx-auto">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto space-y-1 w-48 md:mt-5 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {admin ? (
            <>
              <li>
                <Link to="/dashboard/manage-all-product">
                  Manage All Orders
                </Link>
              </li>
              <li>
                <Link to="/dashboard/add-product">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/make-admin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-product">Manage Products</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/my-orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/my-reviews">My reviews</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
