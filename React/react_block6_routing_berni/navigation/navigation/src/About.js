import React, { Component } from 'react';
import Navbar from './Navbar'
import './App.css';

class About extends Component {
  render() {

    return (

      <div> 
      <Navbar history={this.props.history}/>
      <h4>I am About</h4>
     </div>

    );
  }
}

export default About;