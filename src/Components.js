import * as React from 'react';
import { Route } from 'react-router-dom';

export const Home = () => {
  return <h2>Home</h2>;
};

export const About = () => {
  return <h2>About</h2>;
};

export const Users = () => {
  return <h2>Users</h2>;
};

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};
