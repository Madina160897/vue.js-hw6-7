import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import Gallery from "../components/Gallery.vue";
import Contacts from "../components/Contacts.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/mainPage',
            component: MainPage,
            alias: '/'
        },
        {
            path: '/gallery',
            component: Gallery
        },
        {
            path: '/contacts',
            component: Contacts
        }
    ]
}) 
