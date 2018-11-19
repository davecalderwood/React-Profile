import React from 'react'

// Toggle on/off Skills button and change the button text onClick using props and state
class Skills extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        isHidden: true,
      }
    }
    // Arrow syntax function removes the need for .bind
    toggleHidden = () => {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
      return (
        <div>
          {/* Create the button for hiding and showing skills in the componenet */}
          <button className="skills" onClick={this.toggleHidden}>
         {
          //  Is the state clicked? add the current state as text on the button
            this.state.isHidden? 'Show Skills' : 'Hide Skills'
         }
          </button>
          {!this.state.isHidden && <Child />}
        </div>
      )
    }
  }
  // Child element will have the skills text
  const Child = () => (
  <div className='child'>
        <center>
            <h3>Skills</h3>
            JavaScript, React, React Native, HTML, CSS, Monk, Micro, MicroRouter, MongoDB, API, mLab, GitHub
        </center>
    </div>
  )

export default Skills;  