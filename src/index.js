import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reducers from './reducers'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
// import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
