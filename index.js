const {createApp} = Vue

import posts from './pages/posts.js'
import post from './pages/post.js'

import AppHeader from './layouts/AppHeader.js'
import AppMain from './layouts/AppMain.js'
import AppFooter from './layouts/AppFooter.js'

import getPosts from "./api/getPosts.js";

const routes = [
    { path: '/', component: posts },
    { path: '/post/:id', component: post },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory('/'),
    routes,
})

const app = createApp({
    template: `
        <app-header/>
        <app-main/>
        <app-footer/>
    `,
    components: { AppHeader, AppMain, AppFooter },
})
app.use(router)

app.mount('#app')
