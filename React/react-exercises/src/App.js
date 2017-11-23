// Exercise 1

//     Create a brand new React application with 'React create App' 
//     this app needs to display a list of name from an array,
//     the names are Antonello, George, Gosia, Luke, Linda, Norah 
 //    in order to display them you will need to use Array.map

import React from 'react';
import './App.css';
import Parent from './Parent';
import Child from './Child';

export default class App extends React.Component {
      constructor(){
        super()
        this.state={text:''}
      }

      handleChange(){
                var data = this.refs.data.value
                this.setState({text:data})
                this.refs.input.value = 
                console.log(data)
      }

      render() {

            this.array=['Antonello', 'George', 'Gosia', 'Luke', 'Linda','Norah']

        return <div> {
                      this.array.map(function(e){
                        return <Child name={e}/>
                      })
                     }
                    <form> 
                          <input placeholder = 'Add text here' ref='data' onChange={this.handleChange.bind(this)}/>
                          
                    </form>
                      <h1>{this.state.data}</h1>
               </div>
      }
}

