import React, { Component } from 'react';
import './App.css';
import ChildComponent from './Child'
import GrandChild from './GrandChild'

class App extends Component {
  constructor(){
    super()
    this.state={name:"In"}
  }
    clicked(){
      if(this.state.name === "In"){
        this.setState({name:"Out"})
       } else{
        this.setState({name:"In"})
       }
    }
  render() {
    this.fruit="Kiwi"
    const style={
      background:'yellow',

    }
    const style2={
      background:'blue',
      color:'white',
      text:'center',
    }


    return (

        <div onClick={this.clicked.bind(this)}>

        

        <h1>Check : {this.state.name} </h1>
        <div style={style}>
          <p>
            Words
          </p>
        </div>

        </div>

    );
  }
}

export default App;

