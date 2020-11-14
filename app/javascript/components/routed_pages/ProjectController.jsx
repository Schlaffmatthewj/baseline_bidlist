import React, { Component } from "react"

export default class ProjectController extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        Hello from the Project Controller.jsx 
        Page: {this.props.currentStatus}
      </section>
    )
  }
};