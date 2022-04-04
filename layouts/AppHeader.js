const {defineComponent} = Vue

export default defineComponent({
    name: 'app-header',
    template: `
        <header class="header">
            <nav class="nav">
                <router-link class="nav__item" to="/">На главную</router-link>
                <router-link to="/post/2">Go to About</router-link>
            </nav>
        </header>
    `
})
