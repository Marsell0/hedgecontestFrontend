<template>
  <div class="root">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>

    <main>
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
</script>