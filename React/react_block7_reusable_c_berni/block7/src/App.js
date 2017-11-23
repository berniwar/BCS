import React, { Component } from 'react';
import './App.css';
import Message from "./Message"

class App extends Component {
  constructor(){
    super()

    this.state = {
      loggedIn:false,
      message:'',
      color:'',
      display:''
    }
  }

check(){

  this.setState({display:'block'})

   var text = this.refs.username.value
   var lower = 0
   var upper =0
   var x = ''

    for (var x in text){
        if(text[x]== text[x].toUpperCase()){
            upper++
        }else{
            lower++
        }
    }

    if(text.length >= 8 && upper >= 1 && lower >= 1){

        this.setState({color:'green' , message:'Welcome Back'})

    } else {
          this.setState({color:'red' , message : "PW must have a capital letter and 8 characters"})

    }

    setTimeout(()=>{
      this.setState({display:'none'})
    },1000)

            }

    render() {

    return (

      <div className="App">
        <header className="App-header">
          <input 
            ref='username'
            ClassName= 'name' placeholder="name"></input>

          <button onClick={this.check.bind(this)}>Enter</button>
          <Message 
              message={this.state.message}
              color={this.state.color}
              display={this.state.display}
          />
        </header>
      </div>

    );
  }
}

export default App;
