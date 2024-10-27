import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/Auth";
import { Link } from "react-router-dom";
import SearchInput from "../../Form/SearchInput";
import img1 from "../../../assets/image/navigation-bar/img.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [auth, setAuth] = useAuth();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
  };
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl ms-10">
          {" "}
          <img className="image" src={img1} alt="" />
          Ezy Farming
        </Link>
      </div>
      <div className="flex-none gap-8 me-10 mt-5">
        <div className="form-control">
          <SearchInput></SearchInput>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full z-[2]">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-30 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <Link
              onClick={handleLogOut}
              to="/login"
              className="btn bg-teal-400"
            >
              Logout
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
