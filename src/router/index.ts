import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/result/:value",
            name: "result",
            component: () => import("../views/ResultView.vue"),
        },
        {
            path: "/letter/:value",
            name: "letter",
            component: () => import("../views/LetterView.vue"),
        },
        {
            path: "/details/:id",
            name: "details",
            component: () => import("../views/DetailsView.vue"),
        },
    ],
});

export default router;
