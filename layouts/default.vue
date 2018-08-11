<template>
  <div class="grid">
    <HeaderComponent></HeaderComponent>
    <navbar></navbar>
    <nuxt/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent'
  import Navbar from '../components/Navbar'
  import FooterComponent from '../components/FooterComponent'

  export default {
    components: {
      HeaderComponent,
      Navbar,
      FooterComponent
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
</style>

