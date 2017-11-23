import React from 'react'

export default class Child extends React.Component{
	constructor(props){
		super()
	}
render(){
	return(<h1>Hello {this.props.name}, I am a child</h1>)
}
}