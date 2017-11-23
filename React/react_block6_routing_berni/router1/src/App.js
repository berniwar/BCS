import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

gothere(){
	
  this.props.history.push('/page2')
}

  render() {
    return (
      <div className="App">

      <h1>Hello APP</h1>

      <button onClick={this.gothere.bind(this)}>Redirect</button>

      </div>
    );
  }
}

export default App;
