import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import NavigationBarTwo from "./NavigationBarTwo/NavigationBarTwo";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <NavigationBar></NavigationBar>
      <NavigationBarTwo></NavigationBarTwo>
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

Layout.defaultProps = {
  title: "Ezy Farm",
  description: "A smart solution for agricultural problem",
  keywords: "agriculture, smart, easy, firming, firm, marketplace",
  author: "Sazzad Hosen",
};

export default Layout;
