import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Landingpage",
    component: Landingpage,
  },
  {
    path: "/Home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/portfolio",
    name: "Portoflio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portfolio.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue"),
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
  },
  {
    path: "/Settings",
    name: "Settings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Eth",
    name: "Eth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Eth.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Ltc",
    name: "Ltc",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Ltc.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Ada",
    name: "Ada",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Ada.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Bnb",
    name: "Bnb",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Bnb.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Sol",
    name: "Sol",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Sol.vue"),
    meta: {
      needsUser: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(
    "Stara ruta",
    from.name,
    " -> ",
    to.name,
    "korisnik",
    store.currentUser
  );
  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    console.log("Ne dopustam");
    next("Signup");
  } else {
    next();
  }
});

export default router;
