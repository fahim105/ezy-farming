import React, { useEffect, useState } from "react";
import Layout from "../../../Shared/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserMenu from "../../../Shared/UserMenu/UserMenu";
import "./CropLivestock.css";
import { toast } from "react-toastify";

const CropLivestockDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [cropLivestock, setCropLivestock] = useState({});
  console.log(cropLivestock);

  const getCropLivestockDetails = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/cropLivestock/get-single-crop-livestock/${params.cid}`
      );
      if (data?.success) {
        setCropLivestock(data?.singleCropLivestock);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.cid) getCropLivestockDetails();
    //eslint-disable-next-line
  }, []);

  //handle delete
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are you sure want to delete this product?");
      if (!answer) return;
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/cropLivestock/delete-crop-livestock/${cropLivestock._id}`
      );
      toast.success("Crop livestock data deleted successfully");
      navigate("/dashboard/user/crop-livestock");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while deleting");
    }
  };
  return (
    <Layout>
      <div className="m-5">
        <div className="grid grid-cols-4 ">
          <div>
            <UserMenu></UserMenu>
          </div>
          <div className="col-span-3 livestock-container">
            <div className="border flex justify-center p-20">
              <div>
                <h1 className="text-xl mb-10">
                  <span className="font-bold">Crop Name:</span>{" "}
                  {cropLivestock.name}
                </h1>
                <p> Description: {cropLivestock.description}</p>
                <p>Planting Date: {cropLivestock.plantingDate}</p>
                <p>Harvest Date: {cropLivestock.harvestDate}</p>
                <p>Profit: {cropLivestock.profit}</p>
                <p>Net Gross: {cropLivestock.netGross}</p>
                <p>Loss: {cropLivestock.loss}</p>
                <p>Address: {cropLivestock.address}</p>
                <Link
                  to={`/dashboard/user/crop-livestock/update-livestock/${cropLivestock._id}`}
                >
                  <button className="btn bg-emerald-500 mr-5">Update</button>
                </Link>
                <button className="btn btn-error" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CropLivestockDetails;
