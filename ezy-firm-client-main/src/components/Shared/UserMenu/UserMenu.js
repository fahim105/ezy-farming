import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center ">
        <ul className="menu adminMenu w-56 rounded-box text-xl font-semibold">
          <li className="menu-title text-indigo-800 text-lg">User Panel</li>
          <li className="mb-2 border-2 border-black rounded">
            <Link to="/dashboard/user/profiles">Profile</Link>
          </li>
          <li className="mb-2 border-2 border-black rounded">
            <Link to="/dashboard/user/orders">Orders</Link>
          </li>
          <li className="mb-2 border-2 border-black rounded">
            <Link to="/dashboard/user/crop-livestock">Crop Livestock</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
