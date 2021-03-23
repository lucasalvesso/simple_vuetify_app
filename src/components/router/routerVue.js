import Vue from 'vue';
import VueRouter from 'vue-router';

const routerVue = new VueRouter({
    routes: [],
});

const registeredRoutes = [];

Object.defineProperty(routerVue, 'registeredRoutes', {
    get: () => {
        return registeredRoutes;
    },
});

Object.getPrototypeOf(routerVue).registerRoutes = (routes) => {
    routes.forEach((route) => {
        registeredRoutes.push({ icon: route.icon, name: route.name, path: route.path });
    });
    routerVue.addRoutes(routes);
};

Vue.use(routerVue);

export default routerVue;
