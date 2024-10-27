import express from "express";
import {
  createCropLivestockController,
  deleteCropLivestockController,
  getAllCropLivestockController,
  getSingleLivestock,
  updateCropLivestock,
} from "../controllers/cropLivestockController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//create
router.post(
  "/create-cropLivestock",
  requireSignIn,
  formidable(),
  createCropLivestockController
);

//get all crop livestock
router.get("/get-crop-livestock", requireSignIn, getAllCropLivestockController);

//get single crop livestock
router.get("/get-single-crop-livestock/:cid", getSingleLivestock);

//update crop livestock
router.put("/update-crop-livestock/:cid", updateCropLivestock);

//delete crop livestock
router.delete("/delete-crop-livestock/:cid", deleteCropLivestockController);

export default router;
