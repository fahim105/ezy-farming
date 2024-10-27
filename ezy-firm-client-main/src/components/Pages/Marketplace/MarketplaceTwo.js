import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/Auth";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../Prices/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cart";
import { toast } from "react-toastify";
import Layout from "../../Shared/Layout";

const MarketplaceTwo = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //get all cat
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
    }
  };

  useEffect(() => {
    getAllCategories();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data?.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (checked.length || radio.length) filteredProduct();
  }, [checked, radio]);

  //get filtered product
  const filteredProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  //get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Layout title={"Marketplace - Ezy Farming"}>
      <h1 className="text-center text-2xl font-bold m-12">Marketplace</h1>
      <div className="m-3 p-3 grid grid-cols-4 gap-3">
        <div className="">
          <h1 className="text-center font-semibold text-xl">
            Filter by Category
          </h1>
          <div className="flex flex-col">
            {categories?.map((c) => (
              <Checkbox
                className="text-lg"
                key={c._id}
                onChange={(e) => {
                  handleFilter(e.target.checked, c._id);
                }}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>

          {/* price filter */}
          <div className="mt-10">
            <h1 className="text-center font-semibold text-xl">
              Filter by Price
            </h1>
            <div className="flex flex-col">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio className="text-lg" value={p.array}>
                      {p.name}
                    </Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="flex flex-col">
              <button
                className="btn btn-error mt-10"
                onClick={() => window.location.reload()}
              >
                {" "}
                RESET FILTERS
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-3 text-lg font-semibold userInfo grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {products?.map((p) => (
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
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto  text-center p-3">
          {products && products.length < total && (
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "Loading..." : "Loadmore"}
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MarketplaceTwo;
