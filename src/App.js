import React, { Component } from "react";
import "./App.css";
import Profile from './component/Profile'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './component/About'
import Projects from './component/Projects'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="main-app">
        <div className="main-frame">
        <div className="components">
          <Route exact path="/" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/Projects" component={Projects} />
        </div>

          <div className="right-menu">
          <Link to="/">
            <div className="navigate">
            <p>Profile</p>
            </div></Link>

            <Link to="/Projects">
            <div className="navigate">
            <p>Projects</p>
            </div></Link>

            <Link to="/About">
            <div className="navigate">
              <p>About</p>
            </div></Link>
          </div>

          <div className="footer">

            <a className="footer-nav" target="_blank" rel="noopener noreferrer" href="https://github.com/davecalderwood">
            <div >
              GitHub
            </div></a>

            <a  className="footer-nav" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/david-calderwood-ba8b19172/">
            <div>
              LinkedIn
            </div></a>

            <a className="footer-nav" href="mailto:davidhcalderwood@gmail.com">
            <div>
              Email
            </div></a>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
