import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Button from './components/Button';
import Counter from './components/Counter';
import ConditionalRender from './components/ConditionalRender';
import Form from './components/Form';
import HigherOrderComponent from './components/HigherOrderComponent';
import LifecycleComponent from './components/LifecycleComponent';
import RouterApp from './components/RouterApp';
import StateLiftUp from './components/StateLiftUp';
import ReduxApp from './components/ReduxApp';
import PerformanceOptimization from './components/PerformanceOptimization';
import ErrorBoundary from './components/ErrorBoundary';
import Authentication from './components/Authentication';
import OptimisticUI from './components/OptimisticUI';
import CodeSplitting from './components/CodeSplitting';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/button">
          <Button />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/conditional-render">
          <ConditionalRender />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/hoc">
          <HigherOrderComponent />
        </Route>
        <Route path="/lifecycle">
          <LifecycleComponent />
        </Route>
        <Route path="/routing">
          <RouterApp />
        </Route>
        <Route path="/state-lift-up">
          <StateLiftUp />
        </Route>
        <Route path="/redux">
          <ReduxApp />
        </Route>
        <Route path="/performance-optimization">
          <PerformanceOptimization />
        </Route>
        <Route path="/error-boundary">
          <ErrorBoundary />
        </Route>
        <Route path="/authentication">
          <Authentication />
        </Route>
        <Route path="/optimistic-ui">
          <OptimisticUI />
        </Route>
        <Route path="/code-splitting">
          <CodeSplitting />
        </Route>
        <Route path="/">
          <h1>Welcome to React Tasks!</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;