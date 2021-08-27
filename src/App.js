import React from 'react'
import ClubList from './components/ClubList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ClassList from './components/ClassList'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/classes/:clubid">
          <ClassList />
        </Route>
        <Route path="/">
          <ClubList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
