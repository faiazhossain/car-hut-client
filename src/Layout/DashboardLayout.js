import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {
              <>
                <li>
                  <Link to="/dashboard">My Bookings</Link>
                </li>
              </>
            }

            {isAdmin && (
              <>
                <li>
                  <li className="bg-accent p-4 rounded-xl text-2xl">
                    Admin account
                  </li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/sellers">Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/buyers">Buyers</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li className="bg-warning p-4 rounded-xl text-2xl">
                  Seller Account
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add products</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageproduct">manage products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
