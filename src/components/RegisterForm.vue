<template>
    <div class="top-modal shadow-modal bg-white m-auto">
        <div class="flex align-center justify-center">
            <span>
                Зарегистрироваться
            </span>

            <span
             @click="closeReg"
            >
                <i class="material-icons">close</i>
            </span>
        </div>

        <div >
            <form class="flex align-center justify-center flex-col" @submit.prevent="createUser">
                <div>
                    <input type="text" placeholder="Email" v-model="email" />
                </div>
                <div>
                    <input type="password" placeholder="Пароль" v-model="password" />
                </div>
                <div>
                    <input type="password" placeholder="Подтверждение пароля" v-model="rePassword" />
                </div>
                <div v-if="errors.length">

                    <ul>
                        Исправьте данные ошибки
                        <li v-for="error in errors" v-bind:key="error"> {{ error }}</li>
                    </ul>
                </div>
                <div>
                    <green-button type="submit">Зарегистрироваться</green-button>
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
                password: null,
                rePassword: null,
                errors: [],
            }
        },
        methods:{
            closeReg() {
                this.$emit('closeReg')
            },
            checkForm(){
                this.errors = [];

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
                else{
                    return false
                }
            },
            createUser(){
                if(this.checkForm()){
                    const userData = {
                        "username": this.email,
                        "password": this.password
                    }
                    axios.post('http://176.28.64.201:3437/registration', userData)
                }
            },
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }    
</script>