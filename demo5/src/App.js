import React from 'react';
import './App.css';
import Example from './HooksExample'
import Example2 from './Example2'

import ReducerDemo from './Example3'

import Example7 from './Example7'

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      count: 0
    }
    this.addCount = this.addCount.bind(this)
  }
  

  addCount(){
    this.setState({
      count: this.state.count + 1
    })
  }
  render(){
    return(
      <div>
        <h2>
          You clicked {this.state.count} times
        </h2>
        <button onClick={this.addCount}>Click me</button>
        <hr></hr>
        <Example />
        <hr></hr>
        <Example2 />
        <hr></hr>
        <ReducerDemo />
        <hr></hr>
        <Example7 />
      </div>
    )
  }
}

export default App;
