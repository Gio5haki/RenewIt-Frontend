import React from "react";

import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import "../styleSheets/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <body>
        <ContactForm></ContactForm>
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Contact;
