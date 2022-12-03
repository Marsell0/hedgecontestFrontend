<template>
    <div>
        <h1>Queries</h1>
        <button @click="getPosts">get</button>
        <ul v-for="post in posts" v-bind:key="post.id">
            <li class="bold">{{ post.title_work }}</li>
        </ul>
    </div>
</template>

<script>
    const { ref }=require("@vue/reactivity")
    import axios from 'axios'

    export default {
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