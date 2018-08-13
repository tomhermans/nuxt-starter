<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id" class="post-list-item">
      <PostExcerpt :post="post" />
    </li>
  </ul>
</template>

<script>
import PostExcerpt from './PostExcerpt.vue'

export default {
  props: {
    posts: { type: Array }
  },
  components: {
    PostExcerpt
  }
}
</script>

<style scoped>
.post-list {
  padding: 0;
}

.post-list-item {
  list-style: none;
  margin: 10px 0;
  border: 1px solid black;
  padding: 0 1rem;
}
</style>
