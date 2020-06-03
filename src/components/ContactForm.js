import React from "react";

import "../styleSheets/ContactForm.css";
function ContactForm() {
  return (
    <div className="contact-form-wrapper">
      <div className="contact-form">
        <h3>Do you have any questions?</h3>
        <p>
          We would be glad to be of assistance. We look forward to receiving
          your message!
        </p>
        <form className="form-horizontal">
          <h5>Step 1</h5>
          <h4>Your Enquiry</h4>

          <div className="form-group">
            <label className="control-label col-sm-2" for="message">
              Message:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input-message"
                placeholder="Your message.."
                name="message"
                size="10000"
                maxLength="1000"
              ></input>
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
                placeholder="Your name.."
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
                placeholder="Your workplace.."
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
                placeholder="Your position.."
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
                placeholder="Street name, number.."
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
                placeholder="ZIP number, City.."
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="country-2">
              Country:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Country.."
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
                placeholder="Your email address.."
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
                placeholder="Your phone number.."
              ></input>
            </div>
          </div>

          <hr></hr>

          <button
            type="button"
            className="btn btn-outline-secondary submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;