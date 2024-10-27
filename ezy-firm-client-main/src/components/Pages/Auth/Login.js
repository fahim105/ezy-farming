import React, { useState } from "react";
import Layout from "../../Shared/Layout";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../../context/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Login successfully");

    // console.log(name, email, password, phone, address, answer);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res?.data?.user,
          token: res?.data?.token,
        });
        localStorage.setItem("auth", JSON.stringify(res?.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Registration - Ezy Farm"}>
      <div className="hero min-h-screen background">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-black font-bold">Login</h1>
            <p className="py-6">
              Securely access Ezy Farming. Your gateway to precision farming,
              financial management, and a thriving marketplace.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl form-card">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control "></div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email:</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input input-bordered bg-white"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label ">
                  <Link
                    to="/register"
                    className="text-sm label-text-alt link link-hover text-black"
                  >
                    Don't have any account? Register now!
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none bg-emerald-500 border-black">
                  Login
                </button>
                <button
                  className="btn mt-3 border-none bg-sky-500 border-black"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  Forgot Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
