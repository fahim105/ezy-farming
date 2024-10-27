import slugify from "slugify";
import cropLivestockModel from "../models/cropLivestockModel.js";

//create crop livestock controller
export const createCropLivestockController = async (req, res) => {
  try {
    const {
      name,
      description,
      plantingDate,
      harvestDate,
      profit,
      netGross,
      loss,
      address,
      user,
      slug,
    } = req.fields;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !description:
        return res.status(500).send({ error: "Description is required" });
      case !plantingDate:
        return res.status(500).send({ error: "Planting Dates is required" });
      case !harvestDate:
        return res.status(500).send({ error: "Harvest Date is required" });
      case !profit:
        return res.status(500).send({ error: "Profit is required" });
      case !netGross:
        return res.status(500).send({ error: "Net Gross is required" });

      case !user:
        return res.status(500).send({ error: "User is required" });
      case !address:
        return res.status(500).send({ error: "Address is required" });
    }

    const cropLivestock = new cropLivestockModel({
      ...req.fields,
    });
    await cropLivestock.save();
    res.status(200).send({
      success: true,
      message: "Crop Livestock created successfully",
      cropLivestock,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating crop livestock",
      error,
    });
  }
};

//get crop livestock
export const getAllCropLivestockController = async (req, res) => {
  try {
    const cropLivestock = await cropLivestockModel.find({}).populate("user");

    res.status(200).send({
      success: true,
      message: "All Crop Livestock data fetched successfully",
      cropLivestock,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all crop livestock details",
      error,
    });
  }
};

//get single livestock
export const getSingleLivestock = async (req, res) => {
  try {
    const singleCropLivestock = await cropLivestockModel
      .findById(req.params.cid)
      .populate("user");
    res.status(200).send({
      success: true,
      message: "Single crop livestock fetched",
      singleCropLivestock,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single crop livestock data",
      error,
    });
  }
};

//update crop livestock
export const updateCropLivestock = async (req, res) => {
  try {
    const {
      name,
      description,
      plantingDate,
      harvestDate,
      profit,
      netGross,
      loss,
      address,
    } = req.body;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !description:
        return res.status(500).send({ error: "Description is required" });
      case !plantingDate:
        return res.status(500).send({ error: "Planting Dates is required" });
      case !harvestDate:
        return res.status(500).send({ error: "Harvest Date is required" });
      case !profit:
        return res.status(500).send({ error: "Profit is required" });
      case !netGross:
        return res.status(500).send({ error: "Net Gross is required" });

      case !address:
        return res.status(500).send({ error: "Address is required" });
    }
    const updateCropLivestock = await cropLivestockModel.findByIdAndUpdate(
      req.params.cid,
      {
        name,
        description,
        plantingDate,
        harvestDate,
        profit,
        netGross,
        loss,
        address,
      },
      { new: true }
    );

    await updateCropLivestock.save();
    res.status(200).send({
      success: true,
      message: "Crop livestock data updated successfully",
      updateCropLivestock,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating crop livestock",
      error,
    });
  }
};

export const deleteCropLivestockController = async (req, res) => {
  try {
    await cropLivestockModel.findByIdAndDelete(req.params.cid);
    res.status(200).send({
      success: true,
      message: "Successfully deleted crop livestock data",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting crop livestock",
      error,
    });
  }
};
