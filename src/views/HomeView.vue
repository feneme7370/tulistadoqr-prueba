<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-secondary-50">
    <router-link :to="{name: '2-demo1'}">
      demo1
    </router-link>
    <router-link :to="{name: '3-demo2'}">
      demo2
    </router-link>
  
  </div>
</template>

<style scoped>

</style>