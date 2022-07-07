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
    path: "/Home/:cryptocurrency",
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
    path: "/signup",
    name: "Signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue"),
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Settingspage",
    name: "Settingspage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settingspage.vue"),
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
  {
    path: "/adminpanel",
    name: "adminpanel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/adminpanel.vue"),
    meta: {
      needsUser: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

setTimeout(() => {
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
    if(!noUser){
      console.log(to.name, "aaaaa");
    }
    if(to.name==="adminpanel"){
      if(store.admin){
        next();
      }
      else{ next(false);
      console.log("NE SMIJES");
      }
    }
    if (noUser && to.meta.needsUser) {
      // ako korisnik nije logiran, a stranica zahtjeva login
      console.log("Ne dopustam");
      next("Signup");
    } else {
      next();
    }
    if (!noUser && !to.meta.needsUser) {
      // ako je korisnik logiran, a stranica ne zahtjeva login
      console.log(store.currentUser);
      next("Home");
    }
  });
}, 2000);

export default router;
