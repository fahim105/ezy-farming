import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Weather.css";
import Layout from "../../Shared/Layout";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Dhaka");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a3f8a7f913c4d8bdfa05febc89598fb0`;
  // console.log(data);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const response = await fetch(url);
  //     // console.log(response);
  //     const resJson = await response.json();
  //     // console.log(resJson);
  //     setData(resJson);
  //   };

  //   fetchApi();
  // }, [location]);
  // console.log(location);

  const fetchWeatherData = async () => {
    const response = await fetch(url);
    const resJson = await response.json();
    setData(resJson);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchWeatherData();
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  return (
    <Layout title={"Ezy Farming - Weather"}>
      <div className="weather">
        <div className="search">
          <input
            onKeyDown={handleKeyDown}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            type="search"
          />
          <button type="button" onClick={fetchWeatherData}>
            Submit
          </button>
        </div>
        <div className="weather-container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? (
                <h1 className="text-8xl">{data.main.temp.toFixed()}°C</h1>
              ) : null}
            </div>
            <div className="description">
              {data.weather ? (
                <p
                  className="text-2xl
            "
                >
                  {data.weather[0].main}
                </p>
              ) : null}
            </div>

            {data.name !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main ? (
                    <p className="bold">{data.main.feels_like.toFixed()}°c</p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ? (
                    <p className="bold">{data.main.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? (
                    <p className="bold">{data.wind.speed.toFixed()}MPH</p>
                  ) : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Weather;
