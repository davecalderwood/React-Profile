import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Profile from "./component/Profile";
import About from "./component/About";
import Projects from "./component/Projects";

// This is the page that will render all of the others and house the routings
class App extends Component {
  render() {
    return (
      // The router wrappes around the components to house the buttons
      <Router>
        <div className="main-app">
          <div className="main-frame">
            <div className="components">

              {/* Route paths */}
              <Route exact path="/" component={Profile} />
              <Route path="/about" component={About} />
              <Route path="/Projects" component={Projects} />
            </div>

            <div className="right-menu">
              {/* Wrapping the Router Link around the className and text allows the whole box to be the button, rather than just the text in the <p>tag</p> */}
              <Link to="/">
                {/* <img src="baseline-portrait-24px.svg" alt="Portrait"></img> */}
                <div className="navigate">
                  <p>
                    <h3>Profile</h3>
                  </p>
                </div>
              </Link>

              {/* Create the same Router Link for the Projects and Skills task */}
              <Link to="/Projects">
                <div className="navigate2">
                  <p>
                    <h3>Projects and Skills</h3>
                  </p>
                </div>
              </Link>

              {/* Create the same Router Link for the About page */}
              <Link to="/About">
                <div className="navigate3">
                  <p>
                    <h3>About and Contact</h3>
                  </p>
                </div>
              </Link>
            </div>

            {/* Add the footer navigation on the bottom of the main-frame component */}
            <div className="footer">
              {/* The footer-nav function is the navigation for the external links */}
              {/* target="_blank" rel="noopener noreferrer" goes to the provided link without creating an empty page or redirecting the current page. */}
              {/* Github link to my profile */}
              <a
                className="footer-nav"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/davecalderwood"
              >
                <div>
                  <h3>Github</h3>
                  <img src="baseline-link-24px.svg" alt="Link" />
                </div>
              </a>

              {/* Create the Linkedin button to an external site referrencing my Linkedin profile */}
              <a
                className="footer-nav2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/david-calderwood-ba8b19172/"
              >
                <div>
                  <h3>Linkedin</h3>
                  <img src="baseline-open_in_new-24px.svg" alt="open_in_new" />
                </div>
              </a>

              {/* The mailto: function will open up email with my address in the send line */}
              <a
                className="footer-nav3"
                href="mailto:davidhcalderwood@gmail.com"
              >
                <div>
                  <h3>Email</h3>
                  <img src="baseline-email-24px.svg" alt="email" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
