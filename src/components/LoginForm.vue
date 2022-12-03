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

        <div class="flex align-center justify-center">
            <slot></slot>
        </div>

        <div class="flex align-center justify-center">
            <green-button>Войти</green-button>
        </div>

        <div >
            <form class="flex align-center justify-center flex-col" @submit.prevent="loginUser">
                <div>
                    <input type="text" placeholder="Email" v-model="email" />
                </div>
                <div>
                    <input type="text" placeholder="Пароль" v-model="password" />
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
    export default {
        components:{
            GreenButton,
        },
        data(){
            return{
                email: null,
                password: null
            }
        },
        methods:{
            closeReg() {
                this.$emit('closeReg')
            },
            closeLog() {
                this.$emit('closeLog')
            },
            checkLogin(){
                const res = axios.get("http://176.28.64.201:3437/login")
            },
            loginUser(){

            }
        }
    }    
</script>