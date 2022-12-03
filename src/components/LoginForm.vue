<template>
    <div class=" fixed top-modal shadow-modal bg-white z-100">
        <div class="flex align-center justify-center">
            <span>
                Вход
            </span>

            <span
             @click="closeLog"
            >
                <i class="material-icons">close</i>
            </span>
        </div>

        <div >
            <form class="flex align-center justify-center flex-col" @submit.prevent="loginUser">
                <div>
                    <input type="text" placeholder="Email" v-model="email" />
                </div>
                <div>
                    <input type="password" placeholder="Пароль" v-model="password" />
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

    export default {
        components:{
            GreenButton,
        },
        data(){
            return{
                email: null,
                password: null,
                userData: [],
                errors: [],
            }
        },
        methods:{
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
                    if (res.data != null){
                        console.log("success");
                        this.closeLog();
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