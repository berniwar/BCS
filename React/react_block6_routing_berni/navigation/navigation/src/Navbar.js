import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  
  gothere(e){
  
  var loc = `/${e.target.textContent}`
  this.props.history.push(loc)
}

  render() {
    return (

      <div className="Navbar">

            <button onClick={this.gothere.bind(this)}>Home</button>
            <button onClick={this.gothere.bind(this)}>About</button>
            <button onClick={this.gothere.bind(this)}>Contact</button>
            <button onClick={this.gothere.bind(this)}>Gallery</button>

        <header className="App-header">
        </header>

      </div>
    );
  }
}

export default Navbar;
