<template>
  <div class="root bg-bg_color ">

    <login-form 
    v-if="isLogVisible"
    @closeLog="closeLog" 
    />

    <register-form 
    v-if="isRegVisible"
    @closeReg="closeReg" 
    />

    <header class=" absolute top-0 left-0 z-100 px-0 py-15 bg-main_green flex min-h-header min-w-full">
      <div class="_container p-4">
        <nav>
          <ul class="flex justify-between align-center text-white">
            <li class="mr-40"><router-link to="/">Главная</router-link></li>
            <li v-if="getCookie('role') == 'user'" class="mr-40"><router-link to="/queries">Queries</router-link></li>
            <li class="mr-40" v-if="(getCookie('role') == 'user')"><router-link to="/create_query">Отправить заявку</router-link></li>  
          </ul>
        </nav>
      
        <div v-if="(getCookie('isAuth') == 1)">
          <white-button @click="logOut"><router-link to="/">Выход</router-link></white-button>
        </div>
        <div v-else>
          <white-button
           @click="showLogModal"
          >
            Войти
          </white-button>
          <green-button
          class="ml-10"
           @click="showRegModal"
          >
            Регистрация
          </green-button>
        </div>
      </div>
    </header>

    <main class="_container flex-full_width">
      <router-view></router-view>
    </main>

    <!-- <footer class="_container bg-main_green mt-20">
      footer
    </footer> -->
  </div>    
</template>

<script>
  import GreenButton from '@/components/GreenButton.vue';
  import WhiteButton from '@/components/WhiteButton.vue'
  import RegisterForm from '@/components/RegisterForm.vue';
  import LoginForm from '@/components/LoginForm.vue';

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
      logOut(){
        location.reload()
        document.cookie = 'role=guest';
        document.cookie = 'isAuth=0';
        document.cookie = 'token=0';
      },
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
<style>
  /* .root{
    min-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 2px solid red;
  } */
  ._container{
    justify-content: center;
    max-width: 1533px;
    max-height: 4320px;
    margin: 0px auto;
    display: flex;
}
</style>