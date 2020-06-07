import React, { Fragment } from 'react';
import Home from './pages'
import Example1 from './pages/example1'
import Example2 from './pages/example2'
import Example3 from './pages/example3'
import Example4 from './pages/example4'
import Register from './OAuth/register'
import Login from './OAuth/login'

import _404 from './pages/404'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


function App() {
  let loggedIn = true

  return (
    <Fragment>
      {/* <Router history={History} > */}
      <Router basename="/ameenalam" >
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/react-router-hook/use-history" >react-router-hook - use-history</Link></li>
          <li><Link to="/react-router-hook/use-location" >react-router-hook - use-location</Link></li>
          <li><Link to="/react-router-hook/use-route-match" >react-router-hook - use-route-match</Link></li>
        </ul>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/">
            {loggedIn ? <Redirect to="/login" /> : <Home />}
          </Route>

          <Route path="/react-router-hook/use-history" component={Example1} />
          <Route path="/react-router-hook/use-location" component={Example2} />
          <Route path="/react-router-hook/use-location:slug" component={Example3} />
          <Route path="/react-router-hook/use-route-match" component={Example4} />
          <Route path="/react-router-hook/use-route-match:name" component={Example4} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="**" component={_404} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
