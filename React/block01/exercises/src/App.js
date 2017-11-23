import React from 'react';
import './App.css';
import Child from './Child';

var names=[]

class App extends React.Component {
  constructor(){
    super()
    this.state={text:''}
  }
handleSubmit(e){
            e.preventDefault()
                var data = this.refs.data.value
                this.refs.data.value=''
                alert(data)
    }

handleChange(){
            var data = this.refs.data2.value
            this.setState({text:data})
            }
    
    render(){
                return (
                  <div>
                        
                        <h1>{this.state.text}</h1>

                        <Child/>

                  </div>

                )
    }
}

export default App;

// <form onSubmit={this.handleSubmit.bind(this)}> 
                        //         <input ref ="data"/>
                        // </form>

                        // <input ref='data2' onChange = {this.handleChange.bind(this)}/>
