import React, { Component } from 'react';
import Navbar from './Navbar'
import './App.css';

class Gallery extends Component {


  render() {

    return (

      <div> 
      <Navbar history={this.props.history}/>
      <h4>I am Gallery</h4>
     </div>

    );
  }
}

export default Gallery;