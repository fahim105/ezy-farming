import React, { useEffect, useState } from "react";
import Layout from "../../../Shared/Layout";
import AdminMenu from "../../../Shared/AdminMenu/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UpdateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setId(data.product._id);
      setName(data.product.name);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setName(data.product.name);
      setQuantity(data.product.quantity);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);
  //get all categories

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  //update product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);

      const { data } = axios.put(
        `${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are you sure want to delete this product?");
      if (!answer) return;
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/product/delete-product/${id}`
      );
      toast.success("Product deleted successfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <AdminMenu></AdminMenu>
        </div>
        <div className="col-span-3 text-lg mt-5 p-5 font-semibold userInfo">
          <h1>Update Product</h1>
          <div className="m-2 ">
            <Select
              placeholder
              size="large"
              showSearch
              className="form-select mb-3 w-full"
              onChange={(value) => {
                setCategory(value);
              }}
              value={category}
            >
              {categories.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
            <div className="mb-3">
              <label className="btn btn-outline btn-info w-full">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>
            <div className="mb-3">
              {photo ? (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="Product"
                    height={"200px"}
                    className="img img-responsive h-64"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${id}`}
                    alt="Product"
                    height={"200px"}
                    className="img img-responsive h-64"
                  />
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                placeholder="Write a name"
                className="form-control border border-black rounded-md p-2 w-full"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                value={description}
                placeholder="Write description"
                className="textarea form-control border border-black rounded-md p-2 w-full"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={price}
                placeholder="Write product price"
                className="form-control border border-black rounded-md p-2 w-full"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={quantity}
                placeholder="Write quantity"
                className="form-control border border-black rounded-md p-2 w-full"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Select
                placeholder="Select shipping"
                size="large"
                showSearch
                className="form-select mb-3 w-full rounded-sm"
                onChange={(value) => {
                  setShipping(value);
                }}
                value={shipping ? "Yes" : "No"}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>
            </div>
            <div className="mb-3">
              <button
                onClick={handleUpdate}
                className="btn btn-info mr-3 text-center mx-auto"
              >
                UPDATE
              </button>
              <button
                onClick={handleDelete}
                className="btn btn-error text-center mx-auto"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
