import React, { Component } from 'react';
import Navbar from './Navbar'

class Home extends React.Component {

  render() {

    return (

     <div> 
     <Navbar history={this.props.history}/>
     <h4>I am Home</h4>
     </div>

    );
  }
}

export default Home;