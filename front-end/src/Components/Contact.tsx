import React from "react";
import "../Contact.scss"; // Make sure this path is correct and Sass is properly configured
import Header from "./Header";

function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="contact-details">
          <h2>Our Contact Details</h2>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Bengaluru 560067
            </li>
            <li>
              <i className="fas fa-phone"></i> 9864324635
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@gmail.com
            </li>
          </ul>
        </section>
        <section className="faqs">
          <h2>FAQs</h2>
          <div className="faq">
            <h3>How can I place an order?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="faq">
            <h3>What are your shipping options?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Add more FAQs as needed */}
        </section>
      </main>
    </>
  );
}

export default Contact;
