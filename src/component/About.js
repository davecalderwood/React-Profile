import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-color">
          <h1>About</h1>
          My name is David Calderwood and I am from Portland, Oregon. I am currently attending <a target="_blank" rel="noopener noreferrer" color="blue" href="https://heliotraining.com/">Helio Training</a>. Estimated Graduation is December, 19th 2018. Learning to be a junior developer.<br/>
          <h2>Contact Information</h2>
          You can reach me at (503)858-5790, or email me at davidhcalderwood@gmail.com but I also have provided a link to my email at the bottom. <br/><br/>
          <h4>Disclaimer</h4>
          The background photo is of Crater Lake in Oregon. I take no credit for the photo and it was retrieved from <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/">https://unsplash.com/</a> Photo by Kal Loftus
      </div>
    );
  }
}

export default About;