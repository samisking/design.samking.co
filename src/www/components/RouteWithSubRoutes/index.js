import React from 'react';
import { Route} from 'react-router-dom';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={routeProps => (
    // pass the sub-routes down to keep nesting
    <route.component {...routeProps} {...route} />
  )}/>
);

export default RouteWithSubRoutes;
