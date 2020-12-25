import React from 'react';
import {
  Route
} from 'react-router-dom';
import { RouteInterface } from './interface';

const RouteWithSubRoutes = (route: RouteInterface, index: number) => {
  return (
    <Route
      key={index}
      path={route.path}
      exact={route.exact?true:false}
      render={(props: object)=> (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export {
  RouteWithSubRoutes
}