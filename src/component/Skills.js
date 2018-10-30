import React from 'react'

class Skills extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        isHidden: true,
      }
    }
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
          //  Is the state clicked?
            this.state.isHidden? 'Show Skills' : 'Hide Skills'

         }

          </button>
          {!this.state.isHidden && <Child />}
        </div>
      )
    }
  }
  
  const Child = () => (
  <div className='child'>
        <center>
            <h3>Skills</h3>
            JavaScript, React, HTML, CSS
        </center>
    </div>
  )

export default Skills;  