import { RouteObject } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../components/layout/Layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];
