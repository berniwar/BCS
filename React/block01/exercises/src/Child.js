import React from 'react';

export default class Child extends React.Component{
	render(){
		
		this.names=
		
		["antonello", "mike", "jason", "peter" ]

		return <div>
		 {
			this.names.map((xname,i)=>{
				return <h1 key={i}>{xname} </h1> 
			}) 
		 }
		  	   </div>
		}
	}