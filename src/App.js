import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";
//import logo from "./logo.svg";
//import "./App.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <div className="element">Navigation Bar</div>
      <div className="map-container">
        <MapChart setTooltipContent={setContent}></MapChart>
        <ReactTooltip place="top" type="dark" effect="float">
          {content}
        </ReactTooltip>
      </div>
      <div className="element">Brief Description of the Project</div>
      <div className="element">Social Media</div>
    </div>
  );
}

export default App;
