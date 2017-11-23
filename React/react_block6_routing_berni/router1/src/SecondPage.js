
import React from 'react'

class SecondPage extends React.Component {
	
	gothere(){
  	this.props.history.push('/')
	}

  render() {

    return (

      <div className="App">
      
			<h1>Hello</h1>

			 <button onClick={this.gothere.bind(this)}>Redirect</button>

      </div>

    );
  }
}

export default SecondPage;