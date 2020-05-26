import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./views/Home";

//import logo from "./logo.svg";
//import "./App.css";

function App() {
  return (
    <div class="App">
      
      <Router>
        <div className="navBar">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            About Section
          </Route>
        </Switch>
      </Router>

      <div className="element">Brief Description of the Project</div>
      <div className="element">Social Media</div>
    </div>
  );
}

export default App;
