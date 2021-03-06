import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/Sign-Up",
    name: "Sign Up",
    component: function () {
      return import("../views/SignUp.vue");
    },
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/Log-In",
    name: "Log In",
    component: function () {
      return import("../views/LogIn.vue");
    },
    meta: {
      title: "Log In",
    },
  },
  {
    path: "/Forgot-Password",
    name: "ForgotPassword",
    component: function () {
      return import("../views/ForgotPassword.vue");
    },
    meta: {
      title: "Forgot Password",
    },
  },
  {
    path: "/Acc-Profile",
    name: "Acc Profile",
    component: function () {
      return import("../views/AccProfile.vue");
    },
    meta: {
      title: "Acc Profile",
    },
  },
  {
    path: "/Create-Card",
    name: "Create Card",
    component: function () {
      return import("../views/CreateCard.vue");
    },
    meta: {
      title: "Create Card",
    },
  },
  {
    path: "/View-Blog:postID",
    name: "View Blog",
    component: function () {
      return import("../views/ViewBlog.vue");
    },
    meta: {
      title: "View Blog Post",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | League of Legends`;
  next();
});

export default router;
