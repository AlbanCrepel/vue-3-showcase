import {RouteName} from "./RouteName";

import HomePage from "../pages/home/HomePage.vue";

export const routes = [
    {
        path: "/",
        name: RouteName.HOME_PAGE,
        component: HomePage,
    }
]
