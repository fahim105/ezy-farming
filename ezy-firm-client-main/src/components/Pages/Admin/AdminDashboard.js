import React from "react";
import Layout from "../../Shared/Layout";
import AdminMenu from "../../Shared/AdminMenu/AdminMenu";
import { useAuth } from "../../../context/Auth";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Admin Dashboard - Ezy Firm"}>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <AdminMenu></AdminMenu>
        </div>
        <div className="col-span-3 text-lg mt-5 p-5 font-semibold userInfo">
          <h1 className="text-xl mb-7">User Details: </h1>
          <p> Name: {auth?.user?.name}</p>
          <p>Email: {auth?.user?.email}</p>
          <p>Phone: {auth?.user?.phone}</p>
          <p>Address: {auth?.user?.address}</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
