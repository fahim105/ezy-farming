import React from "react";
import Layout from "../../../Shared/Layout";
import AdminMenu from "../../../Shared/AdminMenu/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Dashboard - Users"}>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <AdminMenu></AdminMenu>
        </div>
        <div className="col-span-3 text-lg mt-5 p-5 font-semibold userInfo">
          <h1>All Users: </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
