<template>
    <div class="mt-16">
        <div >
            <span class="text-modalHeader mb-5">
                Оставить заявку
            </span>
            <form class="flex align-center justify-center flex-col m-container" @submit.prevent="createQuery">
                <div>
                    <input
                    class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                    type="text" placeholder="ФИО*" v-model="full_name" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                    type="text" placeholder="Должность*" v-model="post" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                    type="text" placeholder="Место работы*" v-model="job_place" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                    type="text" placeholder="Тема конкурсной работы*" v-model="topic_work" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                    type="text" placeholder="Заголовок конкурсной работы*" v-model="title_work" />
                </div>
                <div>
                    <input 
                    class=" w-input h-input mb-5 pl-1"
                    type="file" ref="file" v-on:change="uploadFile"
                    />
                </div>
                <div>
                    <p class="text-border_input mb-5">* - данные обязательны для заполнения</p>
                </div>

                <div v-if="errors.length">
                    <ul>
                        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                    </ul>
                </div>

                <div v-if="isCreate">
                    <p>Заявка успешно создана</p>
                </div>

                <div>
                    <green-button class="m-auto block h-10" type="submit">Отправить заявку</green-button>
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
                full_name: null,
                post: null,
                job_place: null,
                topic_work: null,
                title_work: null,
                annotation: null,
                file: null,
                errors: [],
                isCreate: false
            }
        },
        methods: {
            async uploadFile(){
                console.log(this.$refs.file.files[0])
                this.file = this.$refs.file.files[0];
                try{
                    const res = await axios.post('http://176.28.64.201:3437/upload_file', {"file": this.file}, {
                                            headers: 
                                            {
                                                "Authorization": ((((document.cookie).split(";"))[2]).split("="))[1],
                                                'content-Type': 'multipart/form-data'
                                            }
                                        })
                    console.log(((((document.cookie).split(";"))[2]).split("="))[1])
                    console.log(res.data)
                    this.file = res.data.filename
                }
                catch (e){
                    this.errors.push(e.name)
                }
            },
            checkQuery(){
                this.errors = []
                if (!this.full_name){
                    this.errors.push("Заполните поле ФИО")
                }
                if (!this.post){
                    this.errors.push("Заполните поле Должность")
                }
                if (!this.job_place){
                    this.errors.push("Заполните поле Место работы")
                }
                if (!this.topic_work){
                    this.errors.push("Заполните поле Тема конкурсной работы")
                }
                if (!this.title_work){
                    this.errors.push("Заполните поле Заголовок конкурсной работы")
                }
                if (!this.file){
                    this.errors.push("Прикрепите работу")
                }
            },
            createQuery(){
                this.checkQuery()
                if(!this.errors.length){
                    const queryData={
                        "full_name": this.full_name,
                        "post": this.post,
                        "job_place": this.job_place,
                        "topic_work": this.topic_work,
                        "title_work": this.title_work,
                        "annotation": "string",
                        "file": this.file
                    }
                    axios.post('http://176.28.64.201:3437/create_query', 
                                        queryData, {
                                            headers: 
                                            {
                                                "Authorization": ((((document.cookie).split(";"))[2]).split("="))[1],
                                            }
                                        })
                    this.isCreate = true;
                                        
                }
            }
        }
    }
  </script>