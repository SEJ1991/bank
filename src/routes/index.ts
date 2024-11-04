import { RouteObject } from 'react-router-dom';

import { accountRoutes } from './accountRoute';
import { tradeRoutes } from './tradeRoute';
import { settingRoutes } from './settingRoute';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      ...accountRoutes,
      ...tradeRoutes,
      ...settingRoutes,
    ],
  },
];
