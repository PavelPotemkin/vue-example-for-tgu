const {defineComponent, toRefs, onMounted} = Vue

export default defineComponent({
    name: 'app-modal',

    props: {
        value: {
            type: Boolean,
            required: true
        }
    },

    emits: ['update:value'],

    setup(props, {emit}) {
        const {value} = toRefs(props)

        onMounted(() => {
            setTimeout(() => {
                emit('update:value', false)
            }, 2000)
        })

        return {
            value
        }
    },
    template: `
        <div v-if="value" class="modal">
            <slot/>
        </div>
    `
})
