import React from "react";
import Layout from "../../Shared/Layout";
import { useAuth } from "../../../context/Auth";
import Marketplace from "../Marketplace/Marketplace";
import Header from "./Header";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import VideoSection from "../VideoSection/VideoSection";
import AboutTwo from "../About/AboutTwo";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <Header></Header>
      <Marketplace></Marketplace>
      <Services></Services>
      <VideoSection></VideoSection>
      <AboutTwo></AboutTwo>
      <Contact></Contact>
    </Layout>
  );
};

export default Home;
