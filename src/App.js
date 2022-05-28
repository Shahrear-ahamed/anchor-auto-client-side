import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Authontication/Login";
import PassReset from "./Pages/Authontication/PassReset";
import Registration from "./Pages/Authontication/Registration";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import PageNotFound from "./Pages/Shared/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Pages/Home/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Authontication/RequireAuth";
import MyProfile from "./Pages/Dashboard/MyProfile";
import SingleProduct from "./Pages/Product/SingleProduct";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Payment from "./Pages/Dashboard/Payment";
import MyReviews from "./Pages/Dashboard/MyReviews";
import ManageAllProduct from "./Pages/Dashboard/ManageAllProduct";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AllProducts from "./Pages/Product/AllProducts";
import Portfolio from "./Pages/Portfolio/Portfolio";
import MyBlog from "./Pages/MyBlog/MyBlog";
import RequireAdmin from "./Pages/Authontication/RequireAdmin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <SingleProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route
            path="/dashboard/manage-all-product"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="/dashboard/add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="/dashboard/make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="/dashboard/manage-product"
            element={
              <RequireAdmin>
                <ManageAllProduct />
              </RequireAdmin>
            }
          />
          <Route path="/dashboard/my-orders" element={<MyOrders />} />
          <Route path="/dashboard/my-reviews" element={<MyReviews />} />
          <Route path="/dashboard/payment/:id" element={<Payment />} />
        </Route>
        <Route path="/our-products" element={<AllProducts />} />
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/password-reset" element={<PassReset />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
