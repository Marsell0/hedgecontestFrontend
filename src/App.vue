<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
  import BaseLayout from './layouts/BaseLayout'
  export default{
    methods:{
      getToken(){

      },
    },
    computed: {
      layout () {
        return (this.$route.meta.layout || 'base') + '-layout'
      }
    },
    components : {
      BaseLayout,
    }
  }
</script>

<style>

</style>
