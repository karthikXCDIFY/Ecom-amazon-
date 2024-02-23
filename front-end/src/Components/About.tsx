import React from "react";
import "../About.scss";
import Header from "./Header";

function About() {
  return (
    <>
      <body className="about-page">
        <header className="header-about">
          <h1>About Us</h1>
        </header>

        <div className="container">
          <section className="about-section" id="company">
            <h2>Our Company</h2>
            <p>
              Ecart is a leading e-commerce company specializing in providing a
              wide range of products to customers worldwide. With a focus on
              quality, convenience, and customer satisfaction, we aim to
              revolutionize the online shopping experience.
            </p>
          </section>

          <section className="about-section" id="team">
            <h2>Our Team</h2>
            <p>
              Our team at Ecart comprises dedicated professionals from diverse
              backgrounds, including technology, marketing, logistics, and
              customer service. Together, we work tirelessly to ensure seamless
              operations and deliver exceptional service to our customers.
            </p>
          </section>

          <section className="about-section" id="mission">
            <h2>Our Mission</h2>
            <p>
              At Ecart, our mission is to empower customers by providing them
              with access to high-quality products at competitive prices,
              delivered with unparalleled speed and efficiency. We are committed
              to fostering long-term relationships with our customers built on
              trust, reliability, and satisfaction.
            </p>
          </section>

          <section className="about-section" id="history">
            <h2>Our History</h2>
            <p>
              Founded in 20XX, Ecart started as a small e-commerce platform with
              a vision to transform the way people shop online. Over the years,
              we have grown into a global brand, serving millions of customers
              worldwide and expanding our product offerings to meet evolving
              consumer needs.
            </p>
          </section>

          <section className="about-section" id="vision">
            <h2>Our Vision</h2>
            <p>
              Our vision at Ecart is to become the preferred choice for online
              shopping, recognized for our commitment to quality, innovation,
              and customer-centricity. We aspire to continuously enhance the
              shopping experience, leverage cutting-edge technology, and
              contribute positively to the communities we serve.
            </p>
          </section>
        </div>
      </body>
    </>
  );
}

export default About;
