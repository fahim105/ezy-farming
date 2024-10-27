import React, { useEffect, useState } from "react";
import UserMenu from "../../../Shared/UserMenu/UserMenu";
import Layout from "../../../Shared/Layout";
import { useAuth } from "../../../../context/Auth";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateLivestock = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [plantingDate, setPlantingDate] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [profit, setProfit] = useState("");
  const [netGross, setNetGross] = useState("");
  const [loss, setLoss] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [auth, setAuth] = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  console.log(id);

  //get livestock
  const [cropLivestock, setCropLivestock] = useState({});
  //   console.log(cropLivestock);

  const getCropLivestockDetails = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/cropLivestock/get-single-crop-livestock/${params.cid}`
      );
      if (data?.success) {
        setCropLivestock(data?.singleCropLivestock);
        setId(data?.singleCropLivestock?._id);
        setName(data?.singleCropLivestock?.name);
        setDescription(data?.singleCropLivestock?.description);
        setPlantingDate(data?.singleCropLivestock?.plantingDate);
        setHarvestDate(data?.singleCropLivestock?.harvestDate);
        setProfit(data?.singleCropLivestock?.profit);
        setNetGross(data?.singleCropLivestock?.netGross);
        setLoss(data?.singleCropLivestock?.loss);
        setAddress(data?.singleCropLivestock?.address);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.cid) getCropLivestockDetails();
    //eslint-disable-next-line
  }, []);

  //handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/cropLivestock/update-crop-livestock/${id}`,
        {
          name,
          description,
          plantingDate,
          harvestDate,
          profit,
          netGross,
          loss,
          address,
        }
      );
      if (data?.success) {
        toast.success(data?.message);
        navigate("/dashboard/user/crop-livestock");
      } else {
        toast.success("Crop Livestock Updated successfully");
        navigate("/dashboard/user");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="m-5">
        <div className="grid grid-cols-4 ">
          <div>
            <UserMenu></UserMenu>
          </div>
          <div className="col-span-3 livestock-container w-full">
            <div className="border flex justify-center p-20 w-full">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="form-control w-full">
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
                    <textarea
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
                  <button className="btn border-none bg-emerald-500 border-black mt-5">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateLivestock;
