<template>
    <div class=" mt-modal top-modal shadow-modal bg-white m-auto w-modal h-modal rounded-3xl border-solid">
        <div class="flex align-center justify-center mt-modal">
            <span class="text-modalHeader">
                Вход
            </span>

            <span
             @click="closeLog"
            >
                <i class="material-icons">close</i>
            </span>
        </div>

        <div >
            <form class="flex align-center justify-center flex-col m-container" @submit.prevent="loginUser">
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input"
                    type="text" placeholder="Email" v-model="email" />
                </div>
                <div>
                    <input 
                    class="border-2 border-border_input rounded-xl w-input h-input"
                    type="password" placeholder="Пароль" v-model="password" />
                </div>
                <div v-if="errors.length">
                    <ul>
                        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                    </ul>
                </div>
                <div>
                    <green-button type="submit">Войти</green-button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
    import GreenButton from './GreenButton.vue';
    import axios from 'axios';
    import data from '@/global.js'

    export default {
        components:{
            GreenButton,
        },
        data(){
            return{
                resData: [],
                email: null,
                password: null,
                userData: [],
                errors: [],
            }
        },
        methods:{
            parseJwt (token) {
                var base64Url = token.split('.')[1];
                var base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));

                 return JSON.parse(base64);
            },
            closeLog() {
                this.$emit('closeLog')
            },
            checkLogin(){
                if (!this.email){
                    this.errors.push("Необходимо заполнить поле Email")
                }

                if (!this.password){
                    this.errors.push("Необходимо заполнить поле Пароль")
                }
                if (!this.errors.length){
                    return true
                }
                return false

            },
            async loginUser(){
                if(this.checkLogin()){
                    this.userData = {
                        "username": this.email,
                        "password": this.password
                        }
                    const res = await axios.post("http://176.28.64.201:3437/login", this.userData)
                    this.resData = res.data
                    if (res.data != null){
                        data = this.resData.access_token
                        //data = ((this.parseJwt(data).sub).split(':'))[1]
                        document.cookie = `role=${((this.parseJwt(data).sub).split(':'))[1]}`

                        document.cookie = `isAuth=1`

                        this.closeLog()
                        return true;
                    }
                    else{
                        this.errors.push("Неправильный логин или пароль");
                        console.log("fail");
                    }
                }
            }
        }
    }    
</script>