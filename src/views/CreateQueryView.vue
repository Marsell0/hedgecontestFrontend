<template>
    <div class="mt-16">
        <div >
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
                <div>
                    <green-button type="submit">Далее</green-button>
                </div>
            </form>
        </div>
    </div>
  </template>
  
  <script>
    import axios from 'axios'

    export default{
        data(){
            return{
                full_name: '',
                post: '',
                job_place: '',
                topic_work: '',
                title_work: '',
                annotation: '',
                file: ''
            }
        },
        methods: {
            createQuery(){
            }
        }
    }
  </script>