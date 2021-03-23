import routerVue from '@/components/router/routerVue';
routerVue.registerRoutes([{
    children: [],
    component: () => import(/* webpackChunkName: "Common" */ './Home'),
    icon: 'home',
    meta: {
        visible: true,
    },
    name: 'Home',
    path: '/',
}]);
