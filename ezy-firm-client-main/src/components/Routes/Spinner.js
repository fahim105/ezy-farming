import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <div className="flex justify-center h-screen">
      <div className="grid grid-cols-1 content-center items-center">
        <div className="flex flex-col text-center justify-center items-center content-center">
          <h1 className="text-center text-2xl font-semibold pb-5">
            Redirecting to you in {count} seconds
          </h1>
          <PacmanLoader color="#36d7b7" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
