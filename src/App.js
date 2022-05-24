import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Authontication/Login";
import PassReset from "./Pages/Authontication/PassReset";
import Registration from "./Pages/Authontication/Registration";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import PageNotFound from "./Pages/Shared/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Pages/Home/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/password-reset" element={<PassReset />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
