<template>
  <footer class="grid-footer">
    <p>{{ siteData.url }}</p>
    <p>{{ siteData.gmt_offset }}</p>

    footer - <a href="https://twitter.com/tomhermans">@tomhermans</a> || <a href="http://www.tomhermans.com">{{ siteData.url }}</a>
    <p><nuxt-link to="/">Go back home</nuxt-link></p>
  </footer>
</template>

<script>
  export default {
    props: {
      siteData: { type: Object }
    }
  }
</script>
