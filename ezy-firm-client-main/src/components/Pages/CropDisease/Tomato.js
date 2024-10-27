import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Shared/Layout";
import "./Tomato.css";

const Tomato = () => {
  return (
    <Layout title={"Disease detection - Ezy Farm"}>
      <div className="grid grid-cols-12 tomato">
        <div className="col-span-4 m-5">
          <div className="text-center ">
            <ul className="menu adminMenu w-56 rounded-box text-xl font-semibold">
              <li className="menu-title text-indigo-800 text-lg">Plant</li>
              <li className="mb-2 border-2 border-black rounded">
                <Link to="http://127.0.0.1:5000">Potato</Link>
              </li>
              <li className="mb-2 border-2 border-black rounded">
                <Link to="/tomato">Tomato</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-8">
          <p className="text-center text-xl text-sky-500 mt-10">Upcoming...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Tomato;
