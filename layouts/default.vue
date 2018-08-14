<template>
  <div class="grid">
    <HeaderComponent :siteData="site_data" />
    <navbar></navbar>

    <nuxt/>

    <FooterComponent :siteData="site_data" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import HeaderComponent from '~/components/HeaderComponent'
  import Navbar from '~/components/Navbar'
  import FooterComponent from '~/components/FooterComponent'

  export default {
    computed: mapState(['site_data']),
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

