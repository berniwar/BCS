import React from 'react'

export default class Exercise3 extends React.Component{
	constructor(){
		super()
		this.state={text:' '}
	}

	handleSubmit(event){
		event.preventDefault()
		var text = this.refs.text.value
		this.setState({text:text})
	}
	
		render(){
			return (
				<div>
					<form onSubmit ={this.handleSubmit.bind(this)}>
						<input ref='text'/>
					</form>
					<h1>{this.state.text  || 'no data'}</h1>
				</div>
				)
		}
}