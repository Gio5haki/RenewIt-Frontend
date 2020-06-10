import React, { useState } from "react";

import "../styleSheets/ContactForm.css";
function ContactForm() {
  const [message, setMessage] = useState("");
  const [salutation, setSalutation] = useState("");
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [position, setPosition] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleMessage(event) {
    setMessage(event.target.value);
  }

  function handleSalutation(event) {
    setSalutation(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleOrganisation(event) {
    setOrganisation(event.target.value);
  }

  function handlePosition(event) {
    setPosition(event.target.value);
  }

  function handleAddress1(event) {
    setAddress1(event.target.value);
  }

  function handleAddress2(event) {
    setAddress2(event.target.value);
  }

  function handleCountry(event) {
    setCountry(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePhone(event) {
    setPhone(event.target.value);
  }

  function handleSubmit(event) {
    alert("The Form has been submitted");
    event.preventDefault();
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form">
        <h3>Do you have any questions?</h3>
        <p>
          We would be glad to be of assistance. We look forward to receiving
          your message!
        </p>

        <form method="POST" action="/submit-form" className="form-horizontal" onSubmit={handleSubmit}>
          <h5>Step 1</h5>
          <h4>Your Enquiry</h4>

          <div className="form-group">
            <label className="control-label col-sm-2" for="message">
              Message:
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control custom-input"
                value={message}
                onChange={handleMessage}
                name="message"
                rows="5"
                placeholder="Your message.."
                form="form-horizontal"
              ></textarea>
            </div>
          </div>

          <hr></hr>

          <h5>Step 2</h5>
          <h4>Contact Details</h4>

          <div className="form-group">
            <label className="control-label col-sm-2" for="saluation">
              Salutation:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Your marital status.."
                value={salutation}
                onChange={handleSalutation}
                name="salutation"
                maxLength="50"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="name">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                value={name}
                onChange={handleName}
                placeholder="Your name.."
                name="name"
                maxLength="50"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="organisation">
              Organisation:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                value={organisation}
                onChange={handleOrganisation}
                placeholder="Your workplace.."
                name="organisation"
                maxLength="50"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="position">
              Position:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                value={position}
                onChange={handlePosition}
                placeholder="Your position.."
                name="position"
                maxLength="50"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="address-1">
              Street, Number:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                value={address1}
                onChange={handleAddress1}
                placeholder="Street name, number.."
                name="address-1"
                maxLength="50"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="address-2">
              ZIP, City:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                value={address2}
                onChange={handleAddress2}
                placeholder="ZIP number, City.."
                name="address-2"
                maxLength="50"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="country">
              Country:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                value={country}
                onChange={handleCountry}
                placeholder="Country.."
                name="country"
                maxLength="50"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="email">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control custom-input"
                value={email}
                onChange={handleEmail}
                placeholder="Your email address.."
                name="email"
                maxLength="50"
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="phone">
              Phone Number:
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                className="form-control custom-input"
                value={phone}
                onChange={handlePhone}
                placeholder="Your phone number.."
                name="phone"
                maxLength="50"
              ></input>
            </div>
          </div>

          <hr></hr>

          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-secondary submit-button"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
