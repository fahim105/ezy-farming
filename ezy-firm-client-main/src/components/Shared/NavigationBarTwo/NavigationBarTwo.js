import React from "react";
import "./NavigationBarTwo.css";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/Auth";
import { useCart } from "../../../context/cart";
const NavigationBarTwo = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  return (
    <div className="navbar navbarTwo  sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="mr-2 bg-sky-500 rounded-md text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-2 bg-sky-500 rounded-md text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="mr-2 bg-sky-500 rounded-md text-white">
              <Link to="/services">Services</Link>
            </li>
            <li className="mr-2 bg-sky-500 rounded-md text-white">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mr-2 bg-sky-500 rounded-md text-white">
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li className="mr-2 bg-sky-500 rounded-md text-white">
              <Link to="/weather">Weather</Link>
            </li>
            <li className="mr-2 bg-sky-500 rounded-md text-white">
              <Link to="/cropDisease">Detect Disease</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 py-4 text-lg ">
          <li className="mr-2 bg-sky-500 rounded-md text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-2 bg-sky-500 rounded-md text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-2 bg-sky-500 rounded-md text-white">
            <Link to="/services">Services</Link>
          </li>
          <li className="mr-2 bg-sky-500 rounded-md text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mr-2 bg-sky-500 rounded-md text-white">
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li className="mr-2 bg-sky-500 rounded-md text-white">
            <Link to="/weather">Weather</Link>
          </li>
          <li className="mr-2 bg-sky-500 rounded-md text-white">
            <Link to="/cropDisease">Detect Disease</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="text-3xl me-10 mt-3" to="/cart">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              {cart?.length}
            </span>
            <button>
              <BsCart2 />
            </button>
          </div>
        </Link>
        {!auth?.user ? (
          <>
            <Link to="/login" className="btn me-2">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
              className="mr-5 btn text-white bg-rose-400 border-none hover:bg-teal-400"
            >
              Dashboard
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBarTwo;
