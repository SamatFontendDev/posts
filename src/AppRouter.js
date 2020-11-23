import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AdminPage from './components/AdminPage'
import Notes from './components/Notes'

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
          <Route path='/' component={Notes} exact />
          <Route path='/admin' component={AdminPage} exact />
          <Route path='/:id' component={Notes} exact />
          <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App