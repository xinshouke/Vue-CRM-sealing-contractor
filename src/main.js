// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AsyncComputed from 'vue-async-computed';
import VueMoment from 'vue-moment';



//import pages

import HomePage from './components/pages/homePage/HomePage.vue';
import NewCustomerPage from './components/pages/newCustomerPage/NewCustomerPage.vue';
import WorkOrder from './components/pages/profilePage/modules/WorkOrder.vue';
import WorkOrderList from './components/pages/profilePage/modules/WorkOrderList.vue';
import ProfilePage from './components/pages/profilePage/ProfilePage.vue';



//Components
//ui
import Nav from './components/ui/Nav.vue';
import Spinner from './components/ui/Spinner.vue';
import datepicker from 'vue-date';


//Register Components
Vue.component('app-nav', Nav);
Vue.component('app-spinner', Spinner);
Vue.component('app-datepicker', datepicker);



Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(AsyncComputed);
Vue.use(VueMoment);


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/newCustomer',
        component: NewCustomerPage
    },
    {
        path: '/profile/:id',
        component: ProfilePage,
        children: [
            {
                path: '/',
                component: WorkOrderList
            },
            {
                path: '/workorder',
                component: WorkOrder
            }
        ]
    },
    {
        path: '/newCustomer',
        component: NewCustomerPage
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'

});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});
