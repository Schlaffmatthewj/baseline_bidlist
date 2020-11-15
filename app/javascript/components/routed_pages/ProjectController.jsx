import React, { Component } from "react"

import Index from "./projects/Index"
import Show from "./projects/Show"
import New from "./projects/New"
import Edit from "./projects/Edit"

export default class ProjectController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageStatus: '',
      dataLoaded: false
    }
  }

  componentDidMount() {
    if (this.props.currentStatus !== this.state.pageStatus) {
      this.setState({
        pageStatus: this.props.currentStatus,
        dataLoaded: true
      })
    }
  }

  componentDidUpdate() {
    if (this.props.currentStatus !== this.state.pageStatus) {
      this.setState({ pageStatus: this.props.currentStatus })
    }
  }

  conditionalRender() {
    switch (this.state.pageStatus) {
      case 'Index':
        return <Index
                user={this.props.user}
                loggedInStatus={this.props.loggedInStatus}
                />
      case 'Show':
        return <Show
                user={this.props.user}
                loggedInStatus={this.props.loggedInStatus}
                />
      case 'New':
        return <New
                user={this.props.user}
                loggedInStatus={this.props.loggedInStatus} 
                />
      case 'Edit':
        return <Edit
                user={this.props.user}
                loggedInStatus={this.props.loggedInStatus}
                />
      default:
        return <Index
                user={this.props.user}
                loggedInStatus={this.props.loggedInStatus}
                />
    }
  }

  render() {
    return (
      <main>
        {this.state.dataLoaded
          ? this.conditionalRender()
          : <p>Loading...</p>}
      </main>
    )
  }
};