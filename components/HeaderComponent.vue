<template>
  <header class="grid-header">
    <img class="header__logo" src="../assets/img/logo.svg" alt="">
    <h1><nuxt-link to="/">title site todo replace</nuxt-link></h1>
    <p>site desc todo replace</p>
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
    display: inline;
  }
</style>
