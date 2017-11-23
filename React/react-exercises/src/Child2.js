import React from 'react'

export default class Child2 extends React.Component{
constructor(props){
		super()
	}
	render(){
		return <h1>{this.props.text}</h1>
	}
}