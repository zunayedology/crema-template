import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));
const Page3 = React.lazy(() => import('./Page3'));
const Page4 = React.lazy(() => import('./Page4'));
const Page5 = React.lazy(() => import('./Page5'));
const Page6 = React.lazy(() => import('./Page6'));

export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/sample/page-1',
    element: <Page1 />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/sample/page-2',
    element: <Page2 />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/sample/page-3',
    element: <Page3 />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/sample/page-4',
    element: <Page4 />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/sample/page-5',
    element: <Page5 />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/sample/page-6',
    element: <Page6 />,
  },
];
