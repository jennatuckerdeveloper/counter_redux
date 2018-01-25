import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions.js'

class Store extends Component {
  render () {
    const currentCount = this.props.currentCount
    return (
     <div>
      {currentCount}
      <button id='add' onClick={()=> this.props.action.increment()}>+</button>
      <button id='subtract' onClick={()=>this.props.action.decrement()}>-</button>
     </div>
    )
  }
}

function mapStateToProps (state, prop) {
    return {
        currentCount: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)