<template>
    <div class="_container flex-full_width" v-if="posts">
        <div class="bg-white rounded-3xl text-lg shadow-md flex flex-row flex-full_width pl-4 max-h-20 mb-10" v-for="post in posts" :key="post.id">
            <div class=" p-1 text-3xl">
                {{ post.id }}
            </div>
            <div class="flex-full_width ml-4">
                <div class="text-sm">
                    {{ post.full_name }}
                </div>
                <div class="text-2xl">
                    {{ posts.topic_work }}
                </div>
            </div>
            <white-button @click="$router.push(`/query/${post.id}`)"><router-link to="/query/:id">Перейти к заявке</router-link></white-button>
        </div>
    </div>  
    <div v-else>
        <div class=" bg-white rounded-3xl text-lg shadow-md flex flex-row flex-full_width pl-4 max-h-20 mb-10">
            Нет заявок
        </div>
    </div>
    <!-- <div class="bg-white rounded-3xl text-lg shadow-md flex flex-row flex-full_width pl-4 max-h-20 mb-10" v-for="post in posts" :key="post.id">
        <div class=" p-1 text-3xl">
            {{ post.id }}
        </div>
        <div class="flex-full_width ml-4">
            <div class="text-sm">
                {{ post.full_name }}
            </div>
            <div class="text-2xl">
                {{ post.topic_work }}
            </div>
        </div>
        <white-button @click="$router.push(`/query/${post.id}`)"><router-link to="/query/:id">Перейти к заявке</router-link></white-button>
    </div>  
    <div class="bg-white rounded-3xl text-lg shadow-md flex flex-row flex-full_width pl-4 max-h-20 mb-10" v-for="post in posts" :key="post.id">
        <div class=" p-1 text-3xl">
            Нет заявок
        </div>
    </div>       -->
</template>

<script>
import WhiteButton from './WhiteButton.vue';

export default {
    components: {
        WhiteButton
    },
    props:{
        posts: {
            type: Array,
            required: true
        }
    },
    methods:{
        
    }
}
</script>

<style>
  ._container{
    justify-content: center;
    max-width: 1533px;
    max-height: 4320px;
    margin: 0px auto;
    display: flex;
}
</style>