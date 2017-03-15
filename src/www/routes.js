import { asyncRoute } from './components';

// The route config used by react-router
const routes = [
  {
    path: '/',
    exact: true,
    component: asyncRoute(() => System.import('./screens/Home'))
  },
  {
    path: '/:projectSlug',
    component: asyncRoute(() => System.import('./screens/Project'))
  }
];

export default routes;
