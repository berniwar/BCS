import React, { Component } from 'react';
import Navbar from './Navbar'
import './App.css';

class Contact extends Component {

  render() {

    return (

      <div> 
	  <Navbar history={this.props.history}/>
      <h4>I am Contact</h4>
     </div>

    );
  }
}

export default Contact;