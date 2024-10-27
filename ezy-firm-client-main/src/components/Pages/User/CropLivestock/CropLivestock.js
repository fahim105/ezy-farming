import React, { useEffect, useState } from "react";
import Layout from "../../../Shared/Layout";
import UserMenu from "../../../Shared/UserMenu/UserMenu";
import { useAuth } from "../../../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const CropLivestock = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [plantingDate, setPlantingDate] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [profit, setProfit] = useState("");
  const [netGross, setNetGross] = useState("");
  const [loss, setLoss] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState(auth?.user?.id);
  console.log(user);

  //get crop livestock state
  const [livestock, setLivestock] = useState([]);

  // console.log(livestock);

  const navigate = useNavigate();

  //match crop data
  let matched = [];
  livestock.forEach((live) => {
    if (live?.user?._id === auth?.user?.id) {
      matched.push(live);
    }
  });
  console.log(matched);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const livestockData = new FormData();
      livestockData.append("name", name);
      livestockData.append("description", description);
      livestockData.append("plantingDate", plantingDate);
      livestockData.append("harvestDate", harvestDate);
      livestockData.append("profit", profit);
      livestockData.append("netGross", netGross);
      livestockData.append("loss", loss);
      livestockData.append("address", address);
      livestockData.append("user", user);

      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/cropLivestock/create-cropLivestock`,
        livestockData
      );
      if (data?.success) {
        toast.success(data?.message);
      } else {
        toast.success("Crop Livestock created successfully");
        navigate("/dashboard/user");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const getAllCropLivestock = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/cropLivestock/get-crop-livestock`
      );
      setLivestock(data?.cropLivestock);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCropLivestock();
  }, []);

  return (
    <Layout title={"Dashboard - Ezy Farm"}>
      <div className="m-3 p-3 grid grid-cols-6 gap-3">
        <div className="">
          <UserMenu></UserMenu>
        </div>
        <div className="col-span-5 grid grid-cols-4 text-lg mt-5 p-5 font-semibold userInfo">
          <div className="col-span-3">
            <div className="grid grid-cols-2">
              {matched.map((l) => (
                <>
                  <div className="card w-96 livestock-card shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title text-black font-bold">
                        {l.name}
                      </h2>
                      <p>Planting Date: {l.plantingDate}</p>
                      <p>Harvesting Date: {l.harvestDate}</p>
                      <p>Profit: {l.profit}</p>

                      <div className="card-actions justify-end">
                        <Link to={`/dashboard/user/crop-livestock/${l._id}`}>
                          <button className="btn btn-primary">
                            More Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <div className="hero min-h-screen background">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl form-card">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text text-black">Name:</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Crop Project Name"
                      className="input input-bordered bg-white "
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">
                        Description:
                      </span>
                    </label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter Description"
                      className="input input-bordered bg-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">
                        Planting Dates:
                      </span>
                    </label>
                    <input
                      type="text"
                      value={plantingDate}
                      onChange={(e) => setPlantingDate(e.target.value)}
                      placeholder="Enter Planting Date"
                      className="input input-bordered bg-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">
                        Harvesting Dates:
                      </span>
                    </label>
                    <input
                      type="text"
                      value={harvestDate}
                      onChange={(e) => setHarvestDate(e.target.value)}
                      placeholder="Enter Harvesting Date"
                      className="input input-bordered bg-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">Profit</span>
                    </label>
                    <input
                      type="text"
                      value={profit}
                      onChange={(e) => setProfit(e.target.value)}
                      placeholder="Profit"
                      className="input input-bordered bg-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">Net Gross</span>
                    </label>
                    <input
                      type="text"
                      value={netGross}
                      onChange={(e) => setNetGross(e.target.value)}
                      placeholder="Net Gross"
                      className="input input-bordered bg-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">Loss</span>
                    </label>
                    <input
                      type="text"
                      value={loss}
                      onChange={(e) => setLoss(e.target.value)}
                      placeholder="Loss"
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
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="btn border-none bg-sky-500 border-black mt-5"
                  >
                    Submit
                  </button>

                  <div className="form-control mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CropLivestock;
