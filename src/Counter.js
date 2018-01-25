import React, { Component } from 'react'

class Counter extends Component {
  render () {
    return (
      <div className='App'>
        <button id='add' onClick={()=> this.props.increment()}>+</button>
        <button id='subtract' onClick={()=>this.props.decrement()}>-</button>
      </div>
    )
  }
}

export default Counter
