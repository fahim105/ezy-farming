import React, { useEffect, useState } from "react";
import Layout from "../../../Shared/Layout";
import UserMenu from "../../../Shared/UserMenu/UserMenu";
import { useAuth } from "../../../../context/Auth";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data

  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  //form function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/profile`,
        { name, email, password, phone, address }
      );
      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Profile - User Dashboard"}>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <UserMenu></UserMenu>
        </div>
        <div className="col-span-3 text-lg mt-5 p-5 font-semibold userInfo">
          <div className="hero min-h-screen background">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl text-black font-bold">User Profile</h1>
                <p className="py-6">
                  This is user panel where an user can watch their information
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
                      disabled
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
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
