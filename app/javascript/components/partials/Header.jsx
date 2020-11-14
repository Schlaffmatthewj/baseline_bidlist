import React from "react"
import { Link } from "react-router-dom"

export default () => (
  <header>
    <h1>BCI</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact-info">Contact Info</Link>
      <Link to="/projects">Project Controller (Index)</Link>
      <Link to="/projects/new">Project Controller (New)</Link>
      <Link to="/projects/edit/2">Project Controller (Edit)</Link>
      <Link to="/projects/2">Project Controller (Show)</Link>
    </nav>
  </header>
);