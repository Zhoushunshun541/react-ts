import React, { useReducer } from 'react';
import './App.less';
import routes from './router/router';
import { RouteWithSubRoutes } from './router/common';
import { RouteInterface } from './router/interface';
import {Store,initState,reducer} from './hook/store-content';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

function App() {
  const [state, dispatch] = useReducer(reducer,initState)
  return (
    <Store.Provider value={{state,dispatch}}>
      <Router>
          <Switch>
            {routes.map((route: RouteInterface, i: number) => {
              return RouteWithSubRoutes(route, i)
            })}
          </Switch>
      </Router>
    </Store.Provider>
  )
}

export default App;
