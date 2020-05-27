import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Partners from "./views/Partners";
import Contact from "./views/Contact";

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
          <Route exact path="/partners">
            <Partners></Partners>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>

      <div className="element">Social Media</div>
    </div>
  );
}

export default App;
