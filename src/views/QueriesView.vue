<template>
    <div v-if="getCookie('role') == 'admin'" class="mt-16 w-full p-4" @prevent="getPosts">
        <div class="text-modalHeader mt-20 mb-5">
                Список заявок
        </div>
        <query-item v-bind:posts="posts"></query-item>
    </div>
    <div v-else-if="getCookie('role') == 'expert'" @prevent="getAcceptedPosts">
        <div class="text-modalHeader mt-20 mb-5">
                Список заявок
        </div>
        <query-item v-bind:posts="postsAccepted"></query-item>
    </div>
    <div class="text-modalHeader mb-5 mt-20" v-else>
        Доступ запрещен
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
                postsAccepted: []
            }
        },
        mounted(){
            this.getPosts();
            this.getAcceptedPosts();
        },
        methods: {
            getCookie(name) {
                let matches = document.cookie.match(new RegExp(
                                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                    ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            },
            async getPosts () {
                const res = await axios.get('http://176.28.64.201:3437/get_queries', {
                                            headers: 
                                            {
                                                "Authorization": ((((document.cookie).split(";"))[2]).split("="))[1],
                                            }
                                        })
                this.posts = res.data
                console.log(res.data)
            },
            async getAcceptedPosts(){
                const res = await axios.get('http://176.28.64.201:3437/get_accepted_queries', {
                                            headers: 
                                            {
                                                "Authorization": ((((document.cookie).split(";"))[2]).split("="))[1],
                                            }
                                        })
                this.postsAccepted = res.data
                console.log(res.data)
                console.log(this.postsAccepted)
            }

        }
    }
</script>