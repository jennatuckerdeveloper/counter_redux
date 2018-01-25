import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions.js'

import Counter from './Counter.js'

class Store extends Component {
  render () {
    const currentCount = this.props.currentCount
    return (
     <div>
      {currentCount}
      <Counter increment={this.props.action.increment} decrement={this.props.action.decrement}/>
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