import React from "react";
import Layout from "../../Shared/Layout";
import UserMenu from "../../Shared/UserMenu/UserMenu";
import { useAuth } from "../../../context/Auth";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Dashboard - Ezy Farm"}>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <UserMenu></UserMenu>
        </div>
        <div className="col-span-3 text-lg mt-5 p-5 font-semibold userInfo">
          <h1>Dashboard: </h1>
          <p>Name: {auth?.user?.name}</p>
          <p>Email: {auth?.user?.email}</p>
          <p>Address: {auth?.user?.address}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
