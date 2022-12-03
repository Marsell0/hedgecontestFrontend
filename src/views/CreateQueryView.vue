<template>
    <div class="mt-16">
        <div >
            <span class="text-modalHeader">
                Оставить заявку
            </span>
            <form class="flex align-center justify-center flex-col m-container" @submit.prevent="">
                <div>
                    <input
                    class="border-2 border-border_input rounded-xl w-input h-input"
                    type="text" placeholder="ФИО*" v-model="full_name" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input"
                    type="text" placeholder="Должность*" v-model="post" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input"
                    type="text" placeholder="Место работы*" v-model="job_place" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input"
                    type="text" placeholder="Тема конкурсной работы*" v-model="topic_work" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input"
                    type="text" placeholder="Заголовок конкурсной работы*" v-model="title_work" />
                </div>
                <div v-if="showDropFile">
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input"
                    type="file"
                    />
                </div>
                <div v-if="!showDropFile">
                    <green-button type="submit">Далее</green-button>
                </div>
                <div v-else>
                    <green-button type="submit">Отправить заявку</green-button>
                </div>
            </form>
        </div>
    </div>
  </template>
  
  <script>
    import GreenButton from '@/components/GreenButton.vue';
    import axios from 'axios'

    export default{
        components:{
            GreenButton,
        },
        data(){
            return{
                full_name: '',
                post: '',
                job_place: '',
                topic_work: '',
                title_work: '',
                annotation: '',
                file: '',
                showDropFile: false
            }
        },
        methods: {
            createQuery(){
            }
        }
    }
  </script>