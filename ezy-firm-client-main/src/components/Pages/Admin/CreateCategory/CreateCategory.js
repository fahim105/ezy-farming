import React, { useEffect, useState } from "react";
import Layout from "../../../Shared/Layout";
import AdminMenu from "../../../Shared/AdminMenu/AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import CategoryForm from "../../../Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/create-category`,
        { name }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wrong in input form");
    }
  };

  //get all cat

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  //update category

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong");
    }
  };

  //delete category

  const handleDelete = async (pid) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${pid}`
      );
      if (data?.success) {
        toast.success(`${name} is deleted`);

        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <AdminMenu></AdminMenu>
        </div>
        <div className="col-span-3 text-lg mt-5 p-5 font-semibold userInfo">
          <h1>Manage Category</h1>
          <div className="p-3 m-5">
            <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            ></CategoryForm>
          </div>

          {/* table  */}
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c.id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-primary mr-3"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-error text-white"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            ></CategoryForm>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
