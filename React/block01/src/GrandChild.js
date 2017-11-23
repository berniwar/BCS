import React from 'react'

class GrandChild extends React.Component{
	render(){
		return <h1>My Grandchild {this.props.whatever}</h1>
	}
}

export default GrandChild;