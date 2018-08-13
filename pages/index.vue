<template>
  <div class="page">
    <main class="grid-main">
      <h1>Hi, I'm a Vue page, the index one</h1>
      <h2>No idea where this is going next</h2>
      <p>Let's add some lorem ipsum</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor ex felis, a laoreet elit ullamcorper eget. Ut quis euismod urna, quis eleifend nisi. Praesent libero justo, bibendum blandit bibendum vel, imperdiet sed dui. Ut augue est, placerat sed purus in, viverra auctor enim. Aenean eleifend tortor ac est pulvinar aliquam. Maecenas lacinia eros sed egestas tristique. Vivamus pharetra ex maximus velit pellentesque pharetra. Nulla augue magna, malesuada vitae dolor nec, maximus varius diam. Sed faucibus dui ipsum, non fermentum dolor hendrerit tincidunt. Praesent eu dolor et dolor volutpat aliquam. Nulla suscipit faucibus purus at sollicitudin. Proin elementum, augue sit amet fermentum convallis, elit justo pretium magna.</p>

      <hr>
      <div class="posts-container">
          <PostList :posts="posts" />
      </div>
      <hr>
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






