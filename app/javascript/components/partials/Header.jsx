import React from "react"
import { Link } from "react-router-dom"

export default () => (
  <header>
    <h1>BCI</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact-info">Contact Info</Link>
      <Link to="/projects">All Projects</Link>
      <Link to="/projects/new">New Project</Link>
      <Link to="/projects/edit/2">Edit Project</Link>
      <Link to="/projects/2">Single Project</Link>
    </nav>
  </header>
);