import React from "react";
import "../Contact.scss"; 
import Header from "./Header";

function Contact() {
  return (
    <>
    
      <main>
        <section className="contact-details">
          <h2>Our Contact Details</h2>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Ecart Headquarters, Bengaluru 560067
            </li>
            <li>
              <i className="fas fa-phone"></i> Customer Service: 1-800-123
            </li>
            <li>
              <i className="fas fa-envelope"></i> Email: support@ecart.com
            </li>
          </ul>
        </section>
        <section className="faqs">
          <h2>FAQs</h2>
          <div className="faq">
            <h3>How can I place an order?</h3>
            <p>To place an order, simply browse our website, select the desired items, and proceed to checkout. You can also contact our customer service for assistance with placing orders.</p>
          </div>
          <div className="faq">
            <h3>What are your shipping options?</h3>
            <p>We offer standard shipping, express shipping, and in-store pickup options. Shipping costs and delivery times may vary depending on the selected option and your location.</p>
          </div>
          <div className="faq">
            <h3>How can I track my order?</h3>
            <p>Once your order is shipped, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your shipment on our website or through the courier's tracking system.</p>
          </div>
          {/* Add more FAQs as needed */}
        </section>
      </main>
    </>
  );
}

export default Contact;
