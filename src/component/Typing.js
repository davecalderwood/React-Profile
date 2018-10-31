import React, { Component } from "react";
import Typing from 'react-typing-animation';
 
class AnimatedTypingComponent extends Component {
    render() {
        return (
            <div>
  <Typing>
    <Typing Speed={50} />
        <span>Dav Caldewrood</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count ={14} />
        <Typing.Delay ms={1000} />
    <Typing Speed={100} />
        <span>Dave Calderwood</span>
        <Typing.Delay ms={99999999} />
  </Typing>
  </div>
        );
    }
}

export default AnimatedTypingComponent;