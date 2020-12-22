import Vue from "vue";
import VueRouter from "vue-router";
import WelcomePage from '../views/Welcome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome-page",
    component: WelcomePage
  },
 
];

const router = new VueRouter({
  routes
});

export default router;
