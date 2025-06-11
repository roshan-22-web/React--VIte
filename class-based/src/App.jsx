import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)

    this.state = {
       first : 0,
       second : 100
    }
  }



  render() {
    return (
      <div>
        <h1>First: {this.state.first}</h1>
       
        <button onClick={()=> this.setState({first: this.state.first + 1})}>
          Add first
        </button>
        <h1>Second: {this.state.second}</h1>
        <button onClick={()=> this.setState({second: this.state.second + 1})}>
          Add Second
        </button>
      </div>
      
    )
  }
}

export default App