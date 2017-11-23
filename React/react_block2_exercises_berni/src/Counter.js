// Exercise 1
// Create a component called Counter that will only update if the number of click's 
// is odd. you are going to need a button, and a text that displays the counter 
// increasing when the number of clicks is odd

// import React, { Component } from 'react';

// class Counter extends React.Component{
// 	constructor(){
// 		super()
// 		this.state={number:0}
// 	}

// 	clicks () {
// 		this.state.number+=1
// 		var num = this.state.number
// 		if(this.state.number %2 !==0){
// 			this.setState({number:num})
// 		}
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<button onClick={this.clicks.bind(this)}>press</button>
// 				<h1>{this.state.number}</h1>
// 			</div>

// 			)
// 	}
// }

// export default Counter;


// Exercise 2
// create a counter that once it after 10 it will reset to 0. so it will only 
// display numbers from 0 to 9...

// import React, { Component } from 'react';

// class Counter extends React.Component{
// 	constructor(){
// 		super()
// 		this.state={number:0}
// 	}

// 	clicks () {
// 		this.state.number+=1
// 		var num = this.state.number
// 		if(this.state.number < 10){
// 			this.setState({number:num})
// 		} else{
// 			this.setState({number:0})
// 		}
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<button onClick={this.clicks.bind(this)}>press</button>
// 				<h1>{this.state.number}</h1>
// 			</div>

// 			)
// 	}
// }

// export default Counter;

// Exercise 3
// Create a fahrenheit to celsius converter React app, it needs to take the 
// input from one component and then render the temperature in celcius and 
// fahrenheit from a child component, is up to you which component does the 
// conversion...

// import React, { Component } from 'react';

// class Counter extends React.Component{
// 	render(){
// 		return(
// 				<div><h1>{this.props.name}°C</h1></div>
// 			)
// 	}
// }

// export default Counter;

// Exercise 4

//     Create a component called Counter that starts from zero and once it reaches 3 it will display a series of messages:
//     Component will unmount in 3
//     Component will unmount in 2
//     Component will unmount in 1
//     Component will unmount in 0
//     When it reaches 0 the component should unmount itself. Use setInterval.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
constructor(props) {
        super();
			this.state = {value: 0}
			this.countDown = this.countDown.bind(this)
			this.unMount = this.unMount.bind(this)
		}

		unMount(){

			ReactDOM.unmountComponentAtNode(
				ReactDOM.findDOMNode(this)
					.parentNode.parentNode
			);
		}

		countDown(){
			var count = 3
			var that  = this
			var timer = setInterval(function(){
				alert(`Component will unmount in ${count}`)
				count-=1
				if (count ==0){
					clearInterval(timer)
					that.unMount()
				}
			},1000)
		}
		
		clicks () {
			this.state.value += 1;
				this.state.value > 2  ? this.countDown()   
			:	this.setState({	value: this.state.value })	
		}

	componentWillUnmount(){
		alert('componentWillUnmount')
	}
		render(){
			return (
				<div id="container">
					<div>{this.state.value}</div>
			<button onClick = {this.clicks.bind(this)} value={this.state.value}>+</button>
				</div>
			)
    }
}

export default Counter;



