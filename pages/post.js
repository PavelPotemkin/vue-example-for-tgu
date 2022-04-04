const {defineComponent} = Vue
const {useRoute} = VueRouter

export default defineComponent({
    name: 'post',
    setup() {
        const route = useRoute()
        const id = route.params.id

        return {
            id
        }
    },
    template: `
        <div>{{id}}</div>
    `
})
