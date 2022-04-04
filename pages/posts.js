const {defineComponent, ref, onMounted} = Vue

import getPosts from "../api/getPosts.js";

export default defineComponent({
    name: 'posts',
    setup() {
        const searchText = ref('')
        const posts = ref([])

        onMounted(async () => {
            posts.value = await getPosts()
        })

        return {
            searchText,
            posts
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
  
            {{searchText}}
          </div>
        
          <div class="posts__items">
            <div v-for="post in posts">
              {{post}}
            </div>
          </div>
        </div>
    `
})
