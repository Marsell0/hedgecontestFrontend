<template>
    <div>
        <h1 class="text-3xl font-bold underline">Queries</h1>
        <green-button 
            @click="getPosts" 
            class="bg-main_green hover:bg-hover_m_green"
        > Получить заявки
        </green-button>
        <ul v-for="post in posts" v-bind:key="post.id">
            <li class="bold">{{ post.title_work }}</li>
        </ul>
    </div>
</template>

<script>
    import GreenButton from '../components/GreenButton.vue'
    import axios from 'axios'

    export default {
        components:{
            GreenButton,
        },
        data () {
            return{
                posts: [],
            }
        },
        methods: {
            async getPosts () {
                const res = await axios.get('http://176.28.64.201:3437/get_queries')
                this.posts = res.data
                console.log(Object.keys(res).length)
                console.dir(res)
            },

        }
    }
</script>