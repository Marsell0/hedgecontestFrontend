<template>
    <div class="mt-16" @prevent="getPosts">
        <div class="text-modalHeader mb-5">
                Список заявок
        </div>
        <!-- <div>
            <green-button 
                @click="getPosts" 
                class="bg-main_green hover:bg-hover_m_green"
                > Получить заявки
            </green-button>
        </div> -->
            <query-item v-bind:posts="posts"></query-item>

    </div>
</template>

<script>
    import GreenButton from '@/components/GreenButton.vue'
    import QueryItem from '@/components/QueryItem.vue'
    import axios from 'axios'

    export default {
        components:{
            GreenButton, QueryItem
        },
        data () {
            return{
                posts: [],
            }
        },
        mounted(){
            this.getPosts()
        },
        methods: {
            async getPosts () {
                const res = await axios.get('http://176.28.64.201:3437/get_queries')
                this.posts = res.data
            },

        }
    }
</script>