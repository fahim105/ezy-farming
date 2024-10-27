import React, { useEffect, useState } from "react";
import Layout from "../../../Shared/Layout";
import UserMenu from "../../../Shared/UserMenu/UserMenu";
import axios from "axios";
import { useAuth } from "../../../../context/Auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/orders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Orders - User"}>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <UserMenu></UserMenu>
        </div>
        <div className="col-span-3 text-lg mt-5 p-5 font-semibold userInfo">
          <h1 className="text-center">All Orders: </h1>
          {orders?.map((o, i) => {
            return (
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Status</th>
                      <th>Buyer</th>
                      <th>Date</th>
                      <th>Payment</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>{i + 1}</td>
                      <td>{o?.status}</td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createAt).fromNow()}</td>
                      <td>{o?.payment.success ? "Success" : "Failed"}</td>
                      <td>{o?.products.length}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="container mt-10">
                  {o?.products?.map((p, i) => (
                    <div className="grid grid-cols-12 mb-5 border rounded p-5 bg-teal-700 text-white">
                      <div className="col-span-4">
                        <img
                          className="h-4/5 mb-4 w-2/3"
                          src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                          alt={p.name}
                        />
                      </div>
                      <div className="col-span-8 card-body">
                        <h1 className="text-xl font-bold">{p.name}</h1>
                        <h4>
                          <span className="text-lg font-semibold">Price: </span>{" "}
                          {p.price}
                        </h4>
                        <p>
                          <span className="text-lg font-semibold">
                            Description:{" "}
                          </span>{" "}
                          {p.description.substring(0, 150)}...
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
