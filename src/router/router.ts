import Loadable from '@loadable/component';
const routes = [
  {
    path: '/',
    name:'',
    exact:true,
    component: Loadable(() => import('../views/index'))
  },
  {
    path: '/home',
    name:'home',
    exact:true,
    component: Loadable(() => import('../views/home'))
  },
];

export default routes;