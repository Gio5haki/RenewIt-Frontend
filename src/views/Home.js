import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "../components/MapChart";

function Home() {
  const [content, setContent] = useState("");
  return (
    <div>
      <div className="mapChart-container">
        <MapChart setTooltipContent={setContent}></MapChart>
        <ReactTooltip place="top" type="dark" effect="float">
          {content}
        </ReactTooltip>
      </div>
    </div>
  );
}

export default Home;
