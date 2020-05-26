import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Partners from "./views/Partners";

//import logo from "./logo.svg";
//import "./App.css";

function App() {
  return (
    <div class="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route>
            <Partners></Partners>
          </Route>
        </Switch>
      </Router>

      <div className="element">Brief Description of the Project</div>
      <div className="element">Social Media</div>
    </div>
  );
}

export default App;
