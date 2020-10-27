import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

const App = () => {
  return(
    <Switch>
      <Route exact path="/">
        <Airlines />
      </Route>
      <Route exact path="/:slug">
        <Airline/>
      </Route>
    </Switch>
  )
}

export default App