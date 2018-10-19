import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      // The typewriter className is for the animation on the letters of my name
      // Animations are in the App.css file under the .name
      <div className="typewriter">
          <center><br/>
          {/* Create a link under the photo that links out to my Facebook page */}
          < a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/david.calderwood35"><img className="Photo1" src="../Waterski.jpg" alt="Waterski"></img></a>
          <h1 className="name">Dave Calderwood</h1>
          </center>
      </div>
    );
  }
}
export default Profile;

