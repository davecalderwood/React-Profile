import React, { Component } from "react";
import Skills from './Skills'

class Projects extends Component {
  render() {
    return (
      // This page is responsible for detailing my projects and skills, will be updated as I learn more
      <div>
        <center>
          <h1>Projects</h1>
        </center>
        <ol>
          <li>
            <h4>Profile Site</h4>
            -- the one you are at! --
          </li>
          <li>
            <h4>Personal Project</h4>
            -- On Github it is called Kyle-Site --
          </li>
          <li>
            <h4>Group Project</h4>
            -- coming soon --
          </li>
        </ol>
        <Skills />
      </div>
    );
  }
}

export default Projects;
