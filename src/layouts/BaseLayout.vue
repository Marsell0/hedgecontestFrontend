<template>
  <div class="root">
    <header class="absolute w-screen top-0 left-0 z-100 px-0 py-15 bg-main_green flex max-h-header">
      <div class="root">
        <nav>
          <ul class="flex justify-between align-center text-white">
            <li class="mr-80"><router-link to="/">Home</router-link></li>
            <li class="mr-80"><router-link to="/login">Login</router-link></li>
            <li><router-link to="/queries">Queries</router-link></li>  
          </ul>
        </nav>
      
        <div>
          <white-button>
            Войти
          </white-button>
          <green-button>
            Регистрация
          </green-button>
        </div>
      </div>
    </header>

    <main class="mt-10">
      <div>
        <router-view></router-view>
      </div>
    </main>

    <footer>
      footer
    </footer>
  </div>    
</template>

<script>
  import GreenButton from '@/components/GreenButton.vue';
  import WhiteButton from '@/components/WhiteButton.vue'

  export default {
    components:{
      GreenButton, WhiteButton,
    }
  }
//1584 height
</script>
<style scoped>
  .root{
    max-width: 1584px;
    max-height: 4320px;
    margin: 0px auto;
    display: flex;
  }
</style>