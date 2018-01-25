import React, { Component } from 'react'
import './App.css'
import { createStore } from 'redux'
import rootReducer from './reducer.js'

import { Provider } from 'react-redux'

import Main from './Main.js'

const storeInstance = createStore(rootReducer)

class App extends Component {
  render () {
    return (
      <Provider store={storeInstance}>
        <Main />
      </Provider>
    )
  }
}

export default App
