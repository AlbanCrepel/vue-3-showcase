import {RouteName} from "./RouteName";

import HomePage from "../pages/home/HomePage.vue";
import UsersPage from "../pages/users/UsersPage.vue";

export const routes = [
    {
        path: "/",
        name: RouteName.HOME_PAGE,
        component: HomePage,
    },
    {
        path: "/users",
        name: RouteName.USERS_PAGE,
        component: UsersPage,
    }
]
