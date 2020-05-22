import React, {useState} from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";
//import logo from "./logo.svg";
//import "./App.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
     <MapChart setTooltipContent={setContent}></MapChart>
     <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
