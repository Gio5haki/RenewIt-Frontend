import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "../views/Home";
import AboutUs from "../views/AboutUs";
import Partners from "../views/Partners";
import Contact from "../views/Contact";

import "../styleSheets/Container.css";


function Container({ location }) {
  return (
    <div className="wrapper">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/aboutUs" component={AboutUs}></Route>
              <Route exact path="/partners" component={Partners}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(Container);
