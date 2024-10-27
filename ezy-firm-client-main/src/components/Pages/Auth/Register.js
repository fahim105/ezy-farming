import React, { useState } from "react";
import Layout from "../../Shared/Layout";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Register successfully");

    // console.log(name, email, password, phone, address, answer);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
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
            <h1 className="text-5xl text-black font-bold">Register Now!</h1>
            <p className="py-6">
              Join Ezy Farming for personalized farming insights, financial
              management, and access to a vibrant agricultural marketplace.
              Register now
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl form-card">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-black">Name:</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="input input-bordered bg-white "
                  required
                />
              </div>
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
                <label className="label">
                  <span className="label-text text-black">Phone:</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">
                    Your childhood best friend?
                  </span>
                </label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  className="input input-bordered bg-white"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Address:</span>
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="input input-bordered bg-white"
                  required
                />

                <label className="label ">
                  <Link
                    to="/login"
                    className="text-sm label-text-alt link link-hover text-black"
                  >
                    Already have an account? Login now!
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none bg-emerald-500 border-black">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
