/** 

require('./bootstrap');

window.Vue = require('vue').default;

require('./bootstrap');
window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
});
*/

require('./bootstrap');

window.Vue = require('vue').default;

import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes.js';
Vue.component('AllBooks', require('./components/AllBooks.vue').default);
Vue.component('AddBooks', require('./components/AddBooks.vue').default);

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});


