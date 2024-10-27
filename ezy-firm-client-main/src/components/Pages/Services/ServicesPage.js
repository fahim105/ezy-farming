import React from "react";
import "./Services.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Layout from "../../Shared/Layout";

const ServicesPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_77jjoir",
        "template_mh4hxde",
        form.current,
        "I0_Njla0bWDm-XmZd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <Layout>
      <div className="w-1/2 mx-auto mt-10">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Service Name"
            required
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            className="textarea"
            name="message"
            rows="7"
            placeholder="Enter your service description"
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ServicesPage;
