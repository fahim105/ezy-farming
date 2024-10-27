import React, { useState } from "react";
import Layout from "../../Shared/Layout";
import { useSearch } from "../../../context/Search";

const SearchResult = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results"}>
      <div className="text-center">
        <h1 className="mt-5">Search Results: </h1>
        <h6 className="text-lg text-sky-600 font-medium">
          {values?.results.length < 1
            ? "No Products Found"
            : `Found ${values?.results.length}`}
        </h6>
        <div className="m-10 col-span-3 text-lg font-semibold userInfo grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {values?.results.map((p) => (
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
                <h2 className="card-title  text-blue-500">৳ {p.price}</h2>
                <p>
                  {p.description.length < 100
                    ? `${p.description}`
                    : `${p.description.substring(0, 100)} ...`}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add To Cart</button>
                  <button className="btn btn-warning">More Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResult;
