<template>
    <header>
      <h1>Yazılımcı Adınız</h1>
      <nav>
        <router-link to="/">Ana Sayfa</router-link>
        <router-link to="/about">Hakkımda</router-link>
        <router-link to="/projects">Projeler</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'SiteHeader'
  }
  </script>
  
  
  <style scoped> 
  </style>
  