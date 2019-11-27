import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GuardedPage from './Pages/GuardedPage/guardedPage'
import LandingPage from './Pages/LandingPage/landingPage'
import Nav from '../src/Components/Nav/Nav'

function App() {
  return (
    <>
      <div className="App" title="User Authentication">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/guarded">
              <GuardedPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
