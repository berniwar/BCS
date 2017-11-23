import React from 'react';
import Child2 from './Child2';

export default class Exercise4 extends React.Component{
	constructor(){
		super()
		this.state={text:' '}
	}
	handleChange(){
		var data = this.refs.text.value
		this.setState({text:data})
	}

	render(){
		return (
				<div>
						<input ref='text' placeholder = 'Add text here' 
							onChange ={this.handleChange.bind(this)} 
						/>
					<h1> Child2 name={} {this.state.text  || 'no data'}</h1>
				</div>
				)
	}
}