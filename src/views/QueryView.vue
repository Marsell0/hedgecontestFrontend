<template>
    <div class="mt-16 flex-full_width ml-auto mr-auto p-4">
        <div class="mb-10">
            <p class="text-3xl mb-4">{{ post.full_name }}</p>
            <p class="text-6xl font-bold mb-4">{{ post.topic_work }}</p>
            <white-button class="">Печатное издание</white-button>
            <green-button><a target="_blank" href="http://176.28.64.201:3437/download_file?filename=">Скачать</a></green-button>
        </div>
        <div class="mb-10">
            <p class="font-bold text-3xl">Об авторе</p>
            <p class="text-2xl">Должность: {{ post.post }}</p>
            <p class="text-2xl">Место работы: {{ post.job_place }}</p>
        </div>
        <div>
            <p class="text-3xl font-bold">Аннотация</p>
            <p class="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias cum aspernatur temporibus id? Iste ipsa nemo distinctio illo sapiente quam, ad minima quae nihil, aperiam veniam, unde suscipit deserunt ea!</p>
            <!-- <p>Прочитать больше</p> -->
        </div>
        <div v-if="getCookie('role') == 'admin'">
            <div class="mb-10">
                <green-button @click="sendToExperts">Принять</green-button>
                <white-button @click="deleteQuery">Отклонить</white-button>
            </div>
        </div>
        <div v-else-if="getCookie('role') == 'expert'">
            <div class="mb-10">
                <green-button>Оценить работу</green-button>
            </div>
        </div>
        <div v-else>
            <div class="mb-10 mt-20">
                Доступ запрещен
            </div>
        </div>
    </div>
</template>

<script>
import GreenButton from '@/components/GreenButton.vue';
import WhiteButton from '@/components/WhiteButton.vue';
import axios from 'axios';

export default {
    mounted(){
        this.getInfoAboutQuery()
    },
    components:{
        GreenButton, WhiteButton
    },
    data(){
        return{
            post: [],
        }
    },
    methods:{
        async getInfoAboutQuery(){
            console.log(document.cookie)
            const res = await axios.get(`http://176.28.64.201:3437/get_query_by_id/${this.$route.params.id}`, {
                                            headers: 
                                            {
                                                "Authorization": ((((document.cookie).split(";"))[2]).split("="))[1],
                                            }
                                        })
            this.post = res.data
            console.log(((((document.cookie).split(";"))[2]).split("="))[1])
        },
        getCookie(name) {
                let matches = document.cookie.match(new RegExp(
                                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                    ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            },
        async downloadFile(){
            const res = await axios.get(`http://176.28.64.201:3437/download_file?filename=${this.post.file}`)
        },
        async deleteQuery(){
            await axios.delete(`http://176.28.64.201:3437/delete_query/${this.post.id}`, {
                                            headers: 
                                            {
                                                "Authorization": ((((document.cookie).split(";"))[2]).split("="))[1],
                                            }
                                        })
        },
        async sendToExperts(){
            const res = await axios.post(`http://176.28.64.201:3437/accept_query/${this.post.id}`, {
                                            headers: 
                                            {
                                                "Authorization": ((((document.cookie).split(";"))[2]).split("="))[1],
                                            }
                                        })
            console.log(this.post.id)
            console.log(res.data)
        }
    }
}
</script>

<style>
  ._container{
    max-width: 1533px;
    max-height: 4320px;
    display: flex;
}
</style>