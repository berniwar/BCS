import React, { Component } from 'react';


class Message extends Component {
  render() {

  	let style={
  		background: this.props.color,
  		display: this.props.display
  	}

    return (
    	<div style={style}>
    		<h4>{this.props.message}</h4>

    	</div> 

      			
        );
  }
}
export default Message;