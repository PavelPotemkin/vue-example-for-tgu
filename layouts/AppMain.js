const {defineComponent} = Vue

export default defineComponent({
    name: 'app-main',
    template: `
        <main class="container">
            <router-view></router-view>
        </main>
    `
})
