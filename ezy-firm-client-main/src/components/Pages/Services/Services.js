import React from "react";
import img1 from "../../../assets/image/services/soil-testing.jpg";
import img2 from "../../../assets/image/services/fertilization.jpg";
import img3 from "../../../assets/image/services/pest-disease.png";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="my-10">
      <section class="text-gray-600 body-font service-container">
        <h1
          data-aos="fade-down"
          data-aos-duration="3000"
          className="text-3xl my-5 text-black text-center font-bold"
        >
          Services:{" "}
        </h1>
        <div className="w-4/5 text-center mx-auto text-black">
          <hr />
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              class="p-4 md:w-1/3 "
            >
              <div class="h-full border-2 bg-black  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-bold text-sky-500 mb-3">
                    Soil Testing
                  </h1>
                  <p class="leading-relaxed mb-3 text-white service-paragraph">
                    Our Soil Testing service provides essential insights into
                    soil health for farmers and gardeners. Through advanced
                    analysis, we assess nutrient levels, pH balance, and
                    potential contaminants, offering tailored recommendations
                    for optimized crop growth.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <Link
                      to="/servicepage"
                      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Buy Service
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              class="p-4 md:w-1/3 "
            >
              <div class="h-full border-2 bg-black border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img2}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-bold text-sky-500 mb-3">
                    Fertilization
                  </h1>
                  <p class="leading-relaxed mb-3 text-white service-paragraph">
                    Elevate your crops with our Fertilization service, a key
                    player in maximizing agricultural productivity. Our
                    specialized approach tailors nutrient applications to the
                    specific needs of your soil and crops, promoting robust
                    growth and increased yields. With a focus on precision and
                    sustainability, we ensure efficient fertilizer use,
                    minimizing environmental impact.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <Link
                      to="/servicepage"
                      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Buy Service
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              class="p-4 md:w-1/3 "
            >
              <div class="h-full border-2 bg-black border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img3}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-bold text-sky-500 mb-3">
                    Pest and Disease Control
                  </h1>
                  <p class="leading-relaxed mb-3 text-white service-paragraph">
                    Defend your crops with our Pest and Disease Control service.
                    We employ cutting-edge techniques to identify, manage, and
                    prevent the impact of pests and diseases on your
                    agricultural yield. Our experts provide strategic solutions,
                    incorporating both organic and sustainable practices.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <Link
                      to="/servicepage"
                      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Buy Service
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
