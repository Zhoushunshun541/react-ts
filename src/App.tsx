import React from 'react';
import './App.less';
import routes from './router/router';
import { RouteWithSubRoutes } from './router/common';
import { RouteInterface } from './router/interface';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route: RouteInterface, i: number) => {
            return RouteWithSubRoutes(route, i)
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
