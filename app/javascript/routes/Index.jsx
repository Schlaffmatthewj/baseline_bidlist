import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import Header from "../components/partials/Header"
import Footer from "../components/partials/Footer"
import About from "../components/routed_pages/About"
import ContactInfo from "../components/routed_pages/ContactInfo"
import ProjectController from "../components/routed_pages/ProjectController"

export default (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact-info" exact component={ContactInfo} />
        <Route path="/projects" exact component={ProjectController} />
      </Switch>
      <Footer />
    </Router>
  </div>
);