<script setup>

</script>

<template>
  <div> 
    我是vue3+vite子应用项目
    <div>
      <router-link to="/"  >我是index</router-link> <br>
      <router-link to="/a"  >我是A标签</router-link>
    </div>
    

    <router-view></router-view>
  </div>

</template>

<style scoped>

</style>

