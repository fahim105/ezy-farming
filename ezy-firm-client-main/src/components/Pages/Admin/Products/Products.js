import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Shared/AdminMenu/AdminMenu";
import Layout from "../../../Shared/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"Dashboard - All products"}>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <AdminMenu></AdminMenu>
        </div>
        <div className="col-span-3 text-lg mt-5 p-5 font-semibold userInfo">
          <h1 className="text-center font-bold text-2xl mb-20">
            All Products:
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {products?.map((p) => (
              <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id}>
                <div className="card w-96 bg-base-100 shadow-xl h-2/3">
                  <figure>
                    <img
                      className="h-full mb-4"
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title  text-green-500">{p.name}</h2>
                    <p>
                      {p.description.length < 150
                        ? `${p.description}`
                        : `${p.description.substring(0, 150)} ...`}
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Add To Cart</button>
                      <button className="btn btn-warning">Buy Now</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
