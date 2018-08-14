<template>
  <div class="page">
    <main class="grid-main">
      <h1>Hi, I'm a Vue/Nuxt page, the index one</h1>
      <p>Let's add some lorem ipsum</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor ex felis, a laoreet elit ullamcorper eget. Ut quis euismod urna, quis eleifend nisi. Praesent libero justo, bibendum blandit bibendum vel, imperdiet sed dui. Ut augue est, placerat sed purus in, viverra auctor enim. Aenean eleifend tortor ac est pulvinar aliquam. Maecenas lacinia eros sed egestas tristique. Vivamus pharetra ex maximus velit pellentesque pharetra. </p>

      <div class="posts-container">
        <PostList :posts="posts" />
      </div>
    </main>

    <aside class="grid-aside">
      aside
    </aside>

  </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
import wp from '~/lib/wp'

export default {
  async asyncData ({ params }) {
    return wp.posts()
  },
  head () {
    return {
      title: `${this.$store.state.site_data.name} | Home`
    }
  },
  components: {
    PostList
  }
}
</script>

<style>
  .posts-container {
    margin: 1rem auto;
  }
</style>






