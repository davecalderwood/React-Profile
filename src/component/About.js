import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      // The About page shows information about myself as well as Helio Training where I learned these skills, as well as a disclaimer for the background photo I used in the main body
      <div className="about-color">
          <h1>About</h1>
          My name is David Calderwood and I am from Portland, Oregon. I am currently attending <a target="_blank" rel="noopener noreferrer" color="blue" href="https://heliotraining.com/">Helio Training</a>. Estimated Graduation is December, 19th 2018. Learning to be a junior developer.<br/>

          <h2>Contact Information</h2>
          You can reach me at <b>(503)858-5790</b>(Portland area code but I live in Utah), or email me at <b>davidhcalderwood@gmail.com</b>. I also have provided a link to my email at the bottom. <br/><br/>

          <h4>Disclaimer</h4>
          The background photo is of Crater Lake in Oregon. I take no credit for the photo and it was retrieved from <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/">https://unsplash.com/</a> Photo by Kal Loftus
      </div>
    );
  }
}

export default About;