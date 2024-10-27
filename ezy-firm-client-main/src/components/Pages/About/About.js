import React from "react";
import Layout from "../../Shared/Layout";
import aboutImg from "../../../assets/image/about/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout title={"About - Ezy Firm"}>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={aboutImg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
            </h1>
            <div class="mb-8 leading-relaxed">
              <p className="mb-4">
                Welcome to Ezy Farming, where we've cultivated a comprehensive
                platform tailored to meet the diverse needs of farmers and
                gardening enthusiasts. Our mission is to empower you in every
                step of your agricultural journey.
              </p>{" "}
              <p className="mb-4">
                Explore our specialized services, from precise Soil Testing that
                guides optimal nutrient management, to targeted Fertilization
                strategies ensuring robust crop growth, and advanced Pest
                Disease Control for a resilient harvest.
              </p>{" "}
              <p className="mb-4">
                In our Crop Livestock section, manage your financial information
                seamlessly while keeping track of your crop and livestock
                activities. Ezy Farming is your digital ally in promoting
                efficient farming practices, helping you make informed decisions
                for a thriving harvest.
              </p>{" "}
              <p className="mb-4">
                Discover the Ezy Farming Marketplace, a hub for agricultural
                products and services. Whether you're looking for innovative
                tools or connecting with experts, our marketplace is designed to
                cater to your diverse needs. <br /> Join Ezy Farming and
                revolutionize your farming experience – where services,
                financial management, and marketplace convene to cultivate
                success in every field.
              </p>
            </div>
            <div class="flex justify-center">
              <Link to="/login">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
