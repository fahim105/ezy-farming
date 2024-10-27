import React from "react";
import { Link } from "react-router-dom";
import "./AdminMenu.css";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center ">
        <ul className="menu adminMenu w-56 rounded text-xl font-semibold">
          <li className="menu-title text-indigo-800 text-lg">Admin Panel</li>
          <li className="mb-2 border-2 border-black rounded">
            <Link to="/dashboard/admin/products">Products</Link>
          </li>
          <li className="mb-2 border-2 border-black rounded">
            <Link to="/dashboard/admin/orders">Orders</Link>
          </li>
          <li className="mb-2 border-2 border-black rounded">
            <Link to="/dashboard/admin/create-category">Create Category</Link>
          </li>
          <li className="mb-2 border-2 border-black rounded">
            <Link to="/dashboard/admin/create-product">Create Product</Link>
          </li>
          <li className="mb-2 border-2 border-black rounded">
            <Link to="/dashboard/admin/users">Users</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminMenu;
