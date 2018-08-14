<template>
  <header class="grid-header">
    <img class="header__logo" src="../assets/img/logo.svg" alt="">
    <h1>{{ siteData.name }}</h1>
    <p>{{ siteData.description }}</p>
  </header>
</template>

<script>
  export default {
    props: {
      siteData: { type: Object }
    }
  }
</script>

<style scoped>
  h1 {
    display: inline-block;
    margin-left: 2rem;
    word-wrap: break-word;
  }
</style>
