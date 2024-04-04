import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, useHistory } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); 
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const Login = () => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const history = useHistory();

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
      history.push('/');
    });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Log in</button>
    </div>
  );
};

const Logout = () => {
  const history = useHistory();

  const logout = () => {
    fakeAuth.signout(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <h2>You are logged in</h2>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

const Authentication = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Logout />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default Authentication;
