import React from 'react'
import GrandChild from './GrandChild'

class ChildComponent extends React.Component{
	render(){
		return <GrandChild whatever = {this.props.fruit}/>
	}
}

export default ChildComponent;