<template>
  <v-app>
    <router-view></router-view> <!-- Router ile yönlendirme yapılacak alan -->
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global stiller buraya yazılabilir */
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5; /* Arka plan rengi */
}
</style>
