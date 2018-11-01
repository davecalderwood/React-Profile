import React, { Component } from "react";
import Type from '../features/Typing'

class Profile extends Component {
  render() {
    return (
      // The typewriter className is for the animation on the letters of my name
      // Animations are in the App.css file under the .name
      <div className="typewriter">
        <center>
          <br />
          
          {/* Create a link in the photo that links out to my Facebook page */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/david.calderwood35"
          >
            <img className="Photo1" src="../Waterski.jpg" alt="Waterski" />
          </a><br/>
          <div className="typing">
          {/* Updated the typwriter using Reactapp to make a better version ie. no longer using the typewriter class */}
          
          <Type />
          </div>
        </center>
      </div>
    );
  }
}
export default Profile;
