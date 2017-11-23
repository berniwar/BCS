// Exercise 1
// Create a component called Counter that will only update if the number of click's 
// is odd. you are going to need a button, and a text that displays the counter 
// increasing when the number of clicks is odd

// Exercise 2
// create a counter that once it after 10 it will reset to 0. so it will only 
// display numbers from 0 to 9...

// import React, { Component } from 'react';
// import Counter from './Counter'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <Counter/>
//       </div>
//     );
//   }
// }

// export default App;

// Exercise 3
// Create a fahrenheit to celsius converter React app, it needs to take the 
// input from one component and then render the temperature in celcius and 
// fahrenheit from a child component, is up to you which component does the 
// conversion...

// import React, { Component } from 'react';
// import Counter from './Counter'

// class App extends Component {
//   constructor(){
//     super()
//     this.state={number:0}
//   }
//   handleSubmit(event){
//     event.preventDefault()

//     var number = (this.refs.number.value- 32) * (5 / 9)

//     this.setState({number:number})
//   }
//   render() {
//     return (
//       <div>
//         <h1>Fahrenheit to Celsius converter</h1>
//           <form onSubmit ={this.handleSubmit.bind(this)}>
//             <input ref ='number' placeholder='set °F'>{}</input>
//             <button onClick={this.handleSubmit.bind(this)}>Convert</button>
//           </form>
//           <Counter name = {parseInt(this.state.number)}/>
//       </div>
//     );
//   }
// }

// export default App;

// Exercise 4

//     Create a component called Counter that starts from zero and once it reaches 3 it will display a series of messages:
//     Component will unmount in 3
//     Component will unmount in 2
//     Component will unmount in 1
//     Component will unmount in 0
//     When it reaches 0 the component should unmount itself. Use setInterval.

import React, {Component } from 'react';
import Counter from './Counter'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Counter/>
      </div>
    );
  }
}

export default App;
