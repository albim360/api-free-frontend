<template>
    <div>
      <h2>Lista dei Post</h2>
  
      <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
          <router-link :to="'/posts/' + post.slug">
            <h2>{{ post.title }}</h2>
            <p>{{ truncateContent(post.content) }}</p>
            <p class="date">{{ formatDate(post.createdAt) }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      // Chiamata al backend per ottenere la lista dei post
      axios.get('http://localhost:3002/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error('Errore durante il recupero dei post:', error);
        });
    },
    methods: {
      truncateContent(content) {
        // Restringi il contenuto a 100 caratteri
        return content.length > 100 ? content.slice(0, 100) + '...' : content;
      },
      formatDate(dateString) {
        // Formatta la data (assumendo che la data sia nel formato corretto)
        const date = new Date(dateString);
        return date.toLocaleDateString('it-IT');
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
    border: 1px solid #ddd;
    padding: 10px;
  }
  
  .post-list h2 {
    margin-bottom: 10px;
  }
  
  .post-list p {
    color: #555;
  }
  
  .post-list .date {
    color: #777;
    font-size: 12px;
  }
  </style>
  