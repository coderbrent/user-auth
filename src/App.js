import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GuardedPage from './Pages/GuardedPage/GuardedPage'
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {
  return (
    <>
      <div className="App" title="User Authentication">
        <Router>
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
