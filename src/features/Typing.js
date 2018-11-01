import React, { Component } from "react";
import Typing from 'react-typing-animation';
 
class Type extends Component {
    render() {
        return (
    <div>
        <Typing>
            <Typing Speed={50} />
                <span>Dav Caldewrood</span>
                <Typing.Delay ms={300} />
                <Typing.Backspace count={14} />
                <Typing.Delay ms={800} />
            <Typing Speed={100} />
                <span>Dave Calderwood</span>
                <Typing.Delay ms={100000000000} />
        </Typing>
    </div>
        );
    }
}

export default Type;