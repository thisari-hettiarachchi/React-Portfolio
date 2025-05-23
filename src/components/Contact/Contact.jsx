import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="bx bx-headphone"></i> Contact Me
      </h2>

      <div className="container">
        <div className="content">
          <form id="contact-form">
            <div className="form-group">
              <div className="field-row">
                <div className="field">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <i className="bx bxs-user"></i>
                </div>
                <div className="field">
                  <input type="email" name="email" placeholder="Your Email" required />
                  <i className="bx bxl-gmail"></i>
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <input type="text" name="address" placeholder="Your Address" />
                  <i className="bx bxs-location-plus"></i>
                </div>
                <div className="field">
                  <input type="tel" name="phone" placeholder="Phone Number" />
                  <i className="bx bxs-phone"></i>
                </div>
              </div>

              <div className="message">
                <textarea name="message" placeholder="Enter Your Message" required></textarea>
                <i className="bx bxs-message-dots"></i>
              </div>
            </div>

            <div className="button-area">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
