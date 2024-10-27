import React, { useEffect, useState } from "react";
import Layout from "../../Shared/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);

  //initial detail
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //get products
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product?.category?._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelated(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="m-5 container grid grid-cols-2">
        <img
          className="w-3/4 h-3/4 mb-4 rounded"
          src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
          alt={product.name}
        />
        <div>
          <h1 className="mb-5 text-center">Product Details</h1>
          <h4 className="text-xl text-sky-500">Name: {product?.name}</h4>
          <h4 className="text-xl text-emerald-500 mt-3">
            Price: {product.price}
          </h4>
          <h4 className="text-lg">Category: {product?.category?.name}</h4>
          <h4 className="text-lg mt-10">Description: {product?.description}</h4>
          <button className="btn btn-primary mt-10">Add To Cart</button>
        </div>
      </div>
      <hr />
      <div className="m-5 text-lg font-bold mb-10">Similar Products: </div>
      {related.length < 1 && (
        <p className="text-red-400 text-center">No similar products found!!</p>
      )}
      <div className="m-5 grid lg:grid-cols-3 xl:grid-cols-3">
        {related?.map((p) => (
          <div className="card w-96 bg-base-100 shadow-xl h-2/3">
            <figure>
              <img
                className="h-full mb-4"
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
              />
            </figure>
            <div className="card-body grid ">
              <h2 className="card-title  text-green-500">{p.name}</h2>
              <h2 className="card-title  text-blue-500">৳ {p.price}</h2>
              <p>
                {p.description.length < 100
                  ? `${p.description}`
                  : `${p.description.substring(0, 100)} ...`}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProductDetails;
