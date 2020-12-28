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
  {
    path: '/demo1',
    name:'demo1',
    exact:true,
    component: Loadable(() => import('../views/hook/demo1'))
  },
  {
    path: '/demo2',
    name:'demo2',
    exact:true,
    component: Loadable(() => import('../views/hook/demo2'))
  },
];

export default routes;