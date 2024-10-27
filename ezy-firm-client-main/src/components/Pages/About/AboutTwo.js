import React from "react";
import aboutImg from "../../../assets/image/about/about.jpg";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <div>
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
            <h1
              data-aos="fade-down"
              data-aos-duration="3000"
              class="mb-10 title-font sm:text-4xl text-5xl font-medium text-gray-900"
            >
              About Us
            </h1>
            <div>
              <p className="mb-10 text-lg">
                Welcome to Ezy Farming, where we've cultivated a comprehensive
                platform tailored to meet the diverse needs of farmers and
                gardening enthusiasts. Our mission is to empower you in every
                step of your agricultural journey.
              </p>{" "}
              <p className="mb-10 text-lg">
                Explore our specialized services, from precise Soil Testing that
                guides optimal nutrient management, to targeted Fertilization
                strategies ensuring robust crop growth, and advanced Pest
                Disease Control for a resilient harvest.
              </p>{" "}
            </div>
            <div class="flex justify-center">
              <Link to="/about">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTwo;
