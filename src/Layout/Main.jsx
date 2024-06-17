import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {<Navbar />}
      <Outlet></Outlet>
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
