import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends Component {
	
	gothere(){
  	this.props.history.push('/')
	}

  render() {
    return (
      <div className="App">

      <button onClick={this.gothere.bind(this)}>Redirect</button>

      </div>
    );
  }
}

export default App2;
