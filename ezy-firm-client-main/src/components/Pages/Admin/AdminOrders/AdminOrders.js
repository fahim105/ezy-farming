import React, { useEffect, useState } from "react";
import AdminMenu from "./../../../Shared/AdminMenu/AdminMenu";
import Layout from "../../../Shared/Layout";
import axios from "axios";
import moment from "moment";
import { useAuth } from "../../../../context/Auth";
import { Select } from "antd";
import { Option } from "antd/es/mentions";

const { Opttion } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");

  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/all-orders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/order-status/${orderId}`,
        { status: value }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Orders - Admin"}>
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <AdminMenu></AdminMenu>
          </div>
          <div className="col-span-9">
            <h1>All orders: </h1>
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
                        <td>
                          <Select
                            bordered={false}
                            onChange={(value) => handleChange(o._id, value)}
                            defaultValue={o?.status}
                          >
                            {status?.map((s, i) => (
                              <Option key={i} value={s}>
                                {s}
                              </Option>
                            ))}
                          </Select>
                        </td>
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
                            <span className="text-lg font-semibold">
                              Price:{" "}
                            </span>{" "}
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
      </div>
    </Layout>
  );
};

export default AdminOrders;
