import React, { useEffect, useState } from "react";
import Layout from "../../Shared/Layout";
import { useCart } from "../../../context/cart";
import { useAuth } from "../../../context/Auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { toast } from "react-toastify";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  //delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/braintree/token`
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handlePayment
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/braintree/payment`,
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="m-5">
        <div className=" ">
          <h1 className="text-xl p-5 text-center font-semibold bg-sky-400">{`Hello ${
            auth?.token && auth?.user?.name
          }`}</h1>
          <h4 className="text-center mb-5">
            {cart?.length
              ? `You have ${cart.length} items in your cart ${
                  auth?.token ? "" : "Please login to checkout"
                }`
              : "Your cart is empty"}
          </h4>
          <div className="grid grid-cols-12">
            <div className="col-span-7 p-24  ">
              {cart?.map((p) => (
                <div className="grid grid-cols-12 mb-5 border rounded p-5 bg-teal-700 text-white">
                  <div className="col-span-4">
                    <img
                      className="h-4/5 mb-4 w-2/3"
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                    />
                  </div>
                  <div className="col-span-8 card-body">
                    <h1 className="text-xl font-bold">{p.name}</h1>
                    <h4>
                      <span className="text-lg font-semibold">Price: </span>{" "}
                      {p.price}
                    </h4>
                    <p>
                      <span className="text-lg font-semibold">
                        Description:{" "}
                      </span>{" "}
                      {p.description.substring(0, 150)}
                    </p>
                    <button
                      className="btn  btn-error"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-5 text-center p-24 rounded-md bg-emerald-400">
              <h1 className="mb-5 text-xl font-bold">Cart Summery: </h1>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h2 className="mt-10">Total: ৳ {totalPrice()}</h2>
              {auth?.user?.address ? (
                <>
                  <h1>Current address</h1>
                  <h2>{auth?.user?.address}</h2>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/dashboard/user/profiles")}
                  >
                    Update Address
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    {auth?.token ? (
                      <button
                        className="btn btn-error"
                        onClick={() => navigate("/dashboard/user/profile")}
                      >
                        {" "}
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning text-white"
                        onClick={() =>
                          navigate("/login", {
                            state: "/cart",
                          })
                        }
                      >
                        Please Login to Proceed
                      </button>
                    )}
                  </div>
                </>
              )}
              <div className="mt-5 ">
                {!clientToken || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: {
                          flow: "vault",
                        },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    ></DropIn>
                    <button
                      className="btn btn-primary mt-5"
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Processing..." : "Make Payment"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
