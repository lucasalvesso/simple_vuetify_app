import routerVue from '@/components/router/routerVue';
routerVue.registerRoutes([{
    children: [],
    component: () => import(/* webpackChunkName: "Common" */ './Settings'),
    icon: 'settings',
    meta: {
        visible: true,
    },
    name: 'Settings',
    path: '/settings',
}]);
