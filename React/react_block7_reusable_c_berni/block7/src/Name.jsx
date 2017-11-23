import React, { Component } from 'react';

export default class Name extends Component{
	render(){
		let style= {
			backgroundColor: this.props.color
		}
		return (
			<div style={style}>
				{this.props.Name}
			</div>
			)
	}
}