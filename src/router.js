import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import Profile from "./views/Profile.vue";
import Friends from "./views/Friends.vue";
const routes = [
	{
		path: "/:pathMatch(.*)*",
		component: () => import("./views/NotFound.vue"),
	},
	{
		path: "/",
		component: () => import("./views/Home.vue"),
		meta: {
			auth: false,
		},
	},
	{
		path: "/profile/:id",
		component: Profile,
		meta: {
			auth: false,
		},
	},
	{
		path: "/friends",
		component: Friends,
		meta: {
			auth: false,
		},
	},
	{
		path: "/login",
		component: () => import("./views/Login.vue"),
		meta: {
			auth: false,
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth) {
		if (localStorage.getItem("token")) {
			next();
		} else {
			next("/login");
		}
	} else {
		next();
	}
});

export { router };
