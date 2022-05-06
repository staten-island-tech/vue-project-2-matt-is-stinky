import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Sign-Up",
    name: "Sign Up",
    component: function () {
      return import(/* webpackChunkName: "SignUp" */ "../views/SignUp.vue");
    },
  },
  {
    path: "/Log-In",
    name: "Log In",
    component: function () {
      return import(/* webpackChunkName: "LogIn" */ "../views/LogIn.vue");
    },
  },
  {
    path: "/Create-Card",
    name: "Create Card",
    component: function () {
      return import(
        /* webpackChunkName: "CreateCard" */ "../views/CreateCard.vue"
      );
    },
  },
  {
    path: "/View-Blog",
    name: "View Blog",
    component: function () {
      return import(
        /* webpackChunkName: "CreateCard" */ "../views/ViewBlog.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
