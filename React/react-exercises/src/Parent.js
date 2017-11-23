// Exercise 2

//  Create 2 react components, one of them will be the parent component and the other 
//  will be the child component,the parent component will render the child component 
//  and assing a prop to it (this will be your name that you first assign to the parent 
//  component using the keyword this)The child component needs to return the 
//  following message: Hello 'the name you passed as a prop' i am a child component!

import React from 'react'
import Child from './Child'

export default class Parent extends React.Component{
	render(){
		return(
			
			<Child array = {this.props.array}/> 

			)
	}
}