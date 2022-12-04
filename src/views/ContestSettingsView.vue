<template>
    <div class="mt-16 w-full p-4">
        <div class="text-modalHeader mb-5">
                Настройки
        </div>

        <div>
            <form class="flex items-center justify-center flex-col m-container" @submit.prevent="setDeadlines">
                <div>
                    <white-label>Ожидается запуск</white-label>
                    <input
                        class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                        type="date" id="wait" placeholder="ФИО*" v-model="waiting" />
                </div>
                <div>
                    <white-label>Приём заявок</white-label>
                    <input 
                        class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                        type="date" id="accept" placeholder="Должность*" v-model="receiving" />
                </div>
                <div>
                    <white-label>Независимая экспертиза</white-label>
                    <input 
                        class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                        type="date" id="mark" placeholder="Место работы*" v-model="expertise" />
                </div>
                <div>
                    <white-label>Завершение конкурса</white-label>
                    <input 
                        class="border-2 border-border_input rounded-xl w-input h-input mb-5 pl-1"
                        type="date" id="finish" placeholder="Тема конкурсной работы*" v-model="finishing" />
                </div>
                <div>
                    <green-button class="m-auto block h-10" type="submit">Сохранить</green-button>
                </div>
                <div>
                    <white-button class="m-auto block h-10"><router-link to="/">Отмена</router-link></white-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import WhiteLabel from '@/components/WhiteLabel.vue';
    import GreenButton from '@/components/GreenButton.vue';
    import WhiteButton from '@/components/WhiteButton.vue';
    import axios from 'axios';

    export default{
        components:{
            WhiteLabel, GreenButton, WhiteButton
        },
        data(){
            return{
                waiting: null,
                receiving: null,
                expertise: null,
                finishing: null
            }
        },
        methods:{
            async setDeadlines(){
                const stepsData = {
                    "waiting": this.waiting,
                    "receiving": this.receiving,
                    "expertise": this.expertise,
                    "finishing": this.finishing
                }
                console.log(this.waiting)
                const res = await axios.post('http://176.28.64.201:3437/set_deadlines', stepsData, {
                                            headers: 
                                            {
                                                "Authorization": ((((document.cookie).split(";"))[2]).split("="))[1],
                                            }
                                        })
                    console.log(((((document.cookie).split(";"))[2]).split("="))[1])
                    console.log(res.data)
            }
        }
    }
</script>