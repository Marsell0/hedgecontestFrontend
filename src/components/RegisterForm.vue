<template>
    <div class="absolute mt-modal top-modal shadow-modal bg-white m-auto w-modal h-modal rounded-3xl border-solid inset-0 flex flex-col items-center">
        <div class="flex align-center justify-center mt-modal">
            <span class="text-modalHeader">
                Регистрация
            </span>

            <span
             @click="closeReg"
            >
                <i class="material-icons">close</i>
            </span>
        </div>

        <div >
            <form class="flex align-center justify-center flex-col m-container" @submit.prevent="createUser">
                <div>
                    <input
                    class="border-2 border-border_input rounded-xl w-input h-input mt-4 p-1"
                    type="text" placeholder="Email" v-model="email" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input mt-4 p-1"
                    type="password" placeholder="Пароль" v-model="password" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input mt-4 p-1"
                    type="password" placeholder="Подтверждение пароля" v-model="rePassword" />
                </div>
                <div v-if="errors.length">

                    <ul>
                        Исправьте данные ошибки
                        <li v-for="error in errors" v-bind:key="error"> {{ error }}</li>
                    </ul>
                </div>
                <div v-if="isValidReg">
                    <p>Вы успешно зарегистрировались!</p>
                </div>
                <div>
                    <green-button class="mt-4 p-1" type="submit"><span>Зарегистрироваться</span></green-button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
    import GreenButton from './GreenButton.vue';
    import axios from 'axios';

    export default {
        components:{
            GreenButton,
        },
        data(){
            return {
                email: null,
                test: [],
                password: null,
                rePassword: null,
                errors: [],
                isValidReg: false,
            }
        },
        methods:{
            closeReg() {
                this.$emit('closeReg')
            },
            checkForm(){
                this.errors = [];
                if(!this.isEmailTrue(this.email)){
                    this.errors.push("Пользователь с таким email уже зарегистрирован")
                }

                if(this.validEmail(this.email)){
                    this.errors.push("Введите корректный email")
                }
                
                if(!this.email){
                    this.errors.push("Необходимо заполнить поле Email")
                }
                if (!this.password){
                    this.errors.push("Необходимо заполнить поле Пароль")
                }
                if (!this.rePassword){
                    this.errors.push("Необходимо заполнить поле Подтверждение пароля")
                }
                if (this.password != this.rePassword){
                    this.errors.push("Пароли не совпадают")
                }
                if(!this.errors.length){
                    return true
                }
                return false
            },
            createUser(){
                if(this.checkForm()){
                    const userData = {
                        "username": this.email,
                        "password": this.password
                    }
                    this.isValidReg = true
                    axios.post('http://176.28.64.201:3437/registration', userData)
                    setTimeout(5000)
                    this.closeReg()
                }
            },
            validEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            async isEmailTrue(email){
                const res = await axios.get(`http://176.28.64.201:3437/get_user/${email}`)
                this.test = res.data
                if (this.test.email != this.email || this.test.result){

                    return true;
                }
                return false;
            }
        }
    }    
</script>