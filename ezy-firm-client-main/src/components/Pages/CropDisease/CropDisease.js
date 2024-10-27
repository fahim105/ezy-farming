import React from "react";
import Layout from "../../Shared/Layout";
import { Link } from "react-router-dom";
import "./Tomato.css";

const CropDisease = () => {
  return (
    <Layout title={"Disease detection - Ezy Farm"}>
      <div className="grid grid-cols-12 tomato mr-10 text-xl">
        <div className="col-span-4 m-5">
          <div className="text-center ">
            <ul className="menu adminMenu w-56 rounded-box text-xl font-semibold">
              <li className="menu-title text-indigo-800 text-lg">Plant</li>
              <li className="mb-2 border-2 border-black rounded">
                <Link to="http://127.0.0.1:5000">Potato</Link>
              </li>
              <li className="mb-2 border-2 border-black rounded">
                <Link to="/tomato">Tomato</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-8">
          <p className="text-md mt-10 mb-20">
            <p>
              Welcome to our cutting-edge Crop Disease Detection section, where
              we bring innovation to the heart of agriculture. In this
              specialized segment of our website, we employ advanced technology
              to assist you in identifying and managing diseases affecting your
              precious crops, specifically tailored for plants like tomatoes.
            </p>
            <p className="mt-5">
              Our Crop Disease Detection feature utilizes state-of-the-art image
              recognition and artificial intelligence algorithms to analyze
              images of your plants. Whether you're dealing with the notorious
              late blight, early blight, or other tomato-specific diseases, our
              system is designed to provide accurate and rapid identification.{" "}
              Simply upload an image of your affected plants, and our
              intelligent system will analyze the visual cues and patterns
              associated with various crop diseases. The results will not only
              identify the specific ailment but also offer insights into
              potential treatment options and preventive measures.
            </p>
            <p className="mt-5">
              Empower yourself with the knowledge to safeguard your agricultural
              investments. Our Crop Disease Detection section is a valuable tool
              for farmers, gardeners, and agricultural enthusiasts alike. By
              harnessing the power of technology, we aim to contribute to
              healthier crops, increased yields, and sustainable farming
              practices. Explore the future of precision agriculture with our
              Crop Disease Detection feature and take proactive steps towards
              ensuring the vitality of your crops. Let's build a resilient and
              thriving agricultural landscape together.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CropDisease;
