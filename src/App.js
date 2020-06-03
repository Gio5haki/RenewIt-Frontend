import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

//import logo from "./logo.svg";
//import "./App.css";

function App() {
  return (
    <div class="App">
      <Router>
        <header>
          <NavBar></NavBar>
        </header>
        <body>
          <Container></Container>
        </body>
      </Router>
    </div>
  );
}

export default App;
