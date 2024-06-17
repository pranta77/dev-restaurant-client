import React from "react";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaMedal,
  FaRadiation,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/* Dashboard Side Bar */}
      <div className="w-64 min-h-screen text-slate-300 bg-fuchsia-500">
        <ul className=" menu p-5">
          {isAdmin ? (
            <>
              <li>
                <NavLink className="text-2xl" to="/dashboard/adminHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-2xl" to="/dashboard/addItems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink className="text-2xl" to="/dashboard/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink className="text-2xl" to="/dashboard/bookings">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink className="text-2xl" to="/dashboard/users">
                  <FaUser />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className="text-2xl" to="/dashboard/userHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-2xl" to="/dashboard/reservation">
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink className="text-2xl" to="/dashboard/cart">
                  <FaShoppingCart />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink className="text-2xl" to="/dashboard/review">
                  <FaRadiation />
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink className="text-2xl" to="/dashboard/booking">
                  <FaBook />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink className="text-2xl" to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-2xl" to="/menu">
              <FaMedal />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
