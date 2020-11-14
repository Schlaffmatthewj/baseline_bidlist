import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./routed_pages/Home";
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import About from "./routed_pages/About"
import ContactInfo from "./routed_pages/ContactInfo"
import ProjectController from "./routed_pages/ProjectController"

export default class RoutingController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    }
  }

  render() {
    return (
      <main>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact-info" exact component={ContactInfo} />
            <Route path="/projects" exact 
              render={props => 
                <ProjectController 
                  {...props} 
                  loggedInStatus={this.state.loggedInStatus}
                  currentStatus="Index"
                  user={this.state.user}
                />} 
            />
            <Route path="/projects/:id([0-9]+)" exact 
              render={props => 
                <ProjectController 
                  {...props} 
                  loggedInStatus={this.state.loggedInStatus}
                  currentStatus="Show"
                  user={this.state.user}
                />} 
            />
            <Route path="/projects/new" exact 
              render={props => 
                <ProjectController 
                  {...props} 
                  loggedInStatus={this.state.loggedInStatus}
                  currentStatus="New"
                  user={this.state.user}
                />} 
            />
            <Route path="/projects/edit/:id([0-9]+)" exact 
              render={props => 
                <ProjectController 
                  {...props} 
                  loggedInStatus={this.state.loggedInStatus}
                  currentStatus="Edit"
                  user={this.state.user}
                />} 
            />
            <Route path="/*" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </main>
    )
  }
};