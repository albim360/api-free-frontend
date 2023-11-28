<template>
    <div>
      <h2>Lista dei Post</h2>
  
      <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
          <router-link :to="'/posts/' + post.slug">
            <h3>{{ post.title }}</h3>
          </router-link>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .post-list {
    list-style: none;
    padding: 0;
  }
  
  .post-list li {
    margin-bottom: 20px;
  }
  
  .post-list h3 {
    margin-bottom: 10px;
  }
  
  .post-list p {
    color: #555;
  }
  </style>
  