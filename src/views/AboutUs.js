import React from "react";
import Footer from "../components/Footer";
import Cover from "../media_asset/renewable_energy_cover.png"
import "../styleSheets/AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-header">
        <div className="aboutUs-header-image">
          <img src={Cover} alt="image"></img>
        </div>
      </div>
      <div className="aboutUs-body">
        <div className="aboutUs-body-title">
          <span>Mission</span>
          <span style={{ color: "#F18D04" }}>and Goals</span>
        </div>
        <div className="aboutUs-body-body">
          <div className="aboutUs-body-paragraph">
            We focus our efforts on the building, power and transport
            consumption sectors, as well as on issues relating to energy
            generation, storage, networking, and digitalisation. We realise
            pilot projects, advise politicians, manufacturers and service
            providers, qualify multipliers, inform consumers, build networks,
            encourage international exchanges and develop future scenarios.
          </div>

          <div className="aboutUs-body-paragraph">
            To do so, dena primarily focuses on market instruments and
            innovative business models. And we view the energy system as a
            whole, because it is becoming increasingly vital to link the many
            different parts of the world of energy to each other. dena’s
            shareholders are the Federal Republic of Germany and the KfW Group.
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
