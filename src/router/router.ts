import Loadable from '@loadable/component';
const routes = [
  {
    path: '/',
    name:'',
    component: Loadable(() => import('../views/index'))
  },
  {
    path: '/home',
    name:'home',
    component: Loadable(() => import('../views/home'))
  },
];

export default routes;