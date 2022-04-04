const {defineComponent, ref, onMounted} = Vue

import AppModal from "../components/AppModal.js";
import getPosts from "../api/getPosts.js";

export default defineComponent({
    name: 'posts',

	components: {AppModal},

    setup() {
        const searchText = ref('')
        const posts = ref([])

        onMounted(async () => {
            posts.value = await getPosts()
        })

        const isModalOpen = ref(false)

        return {
            searchText,
            posts,
            isModalOpen
        }
    },
    template: `
        <div class="posts">
        	<div class="posts__search">
        	    <input
        	        v-model="searchText"
        	        class="input"
        	        type="text"
        	    >
	
        	    <button @click="isModalOpen = !isModalOpen">
        	        aaa
        	    </button>
	
        	    <app-modal v-model:value="isModalOpen">
        	        привет
        	    </app-modal>
        	</div>

        	<div class="posts__items">
        	    <div v-for="post in posts">
        	        {{ post }}
        	    </div>
        	</div>
        </div>
	`
})
