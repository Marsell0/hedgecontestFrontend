<template>
  <div class="bg-bg_color flex flex-col min-h-full">

    <login-form 
    v-if="isLogVisible"
    @closeLog="closeLog" 
    />

    <register-form 
    v-if="isRegVisible"
    @closeReg="closeReg" 
    />

    <header class="root absolute top-0 left-0 z-100 px-0 py-15 bg-main_green flex max-h-header min-w-full">
      <div class="root">
        <nav>
          <ul class="flex justify-between align-center text-white">
            <li class="mr-80"><router-link to="/">Главная</router-link></li>
            <li v-if="getCookie('role') == 'user'" class="mr-80"><router-link to="/queries">Queries</router-link></li>
            <li v-if="(getCookie('role') == 'user')"><router-link to="/create_query">Отправить заявку</router-link></li>  
          </ul>
        </nav>
      
        <div v-if="(getCookie('isAuth') == 1)">
          <white-button>Выход</white-button>
        </div>
        <div v-else>
          <white-button
           @click="showLogModal"
          >
            Войти
          </white-button>
          <green-button
           @click="showRegModal"
          >
            Регистрация
          </green-button>
        </div>
      </div>
    </header>

    <main class="root mt-16 flex-auto">
      <div>
        <router-view></router-view>
      </div>
    </main>

    <footer class="root bg-main_green">
      footer
    </footer>
  </div>    
</template>

<script>
  import GreenButton from '@/components/GreenButton.vue';
  import WhiteButton from '@/components/WhiteButton.vue'
  import RegisterForm from '@/components/RegisterForm.vue';
  import LoginForm from '@/components/LoginForm.vue';
  import data from "@/global.js"

  export default {
    data(){
      return{
        isRegVisible: false,
        isLogVisible: false,
      }
    },
    components:{
      GreenButton, WhiteButton, RegisterForm, LoginForm,
    },
    methods:{
      getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      },
      showLogModal(){
        this.isLogVisible = true;
      },
      closeLog(){
        this.isLogVisible = false;
      },

      showRegModal(){
        this.isRegVisible = true;
      },
      closeReg(){
        this.isRegVisible = false;
      }
    }
  }
//1584 height
</script>
<style scoped>
  .root{
    max-width: 1533px;
    margin: 0px auto;
    display: flex;
  }
</style>