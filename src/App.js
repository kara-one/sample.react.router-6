import * as React from 'react';
import './App.css';
import { Link, useRoutes } from 'react-router-dom';
import { About, Home, Users } from './Components';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    children: [
      {
        path: '',
        element: <About />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
];

function App() {
  console.log('routes: ', routes);
  const routeResult = useRoutes(routes);

  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <A href="/">Home</A> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <A href="/about">About</A> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <A href="/users">Users</A> */}
            <Link to="/about/users">Users</Link>
          </li>
        </ul>
      </nav>

      {routeResult}
    </div>
  );
}

export default App;
