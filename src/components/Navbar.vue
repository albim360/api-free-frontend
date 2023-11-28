<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/">Home</router-link>
      </div>
  
      <div class="navbar-links">
        <router-link to="/posts">Lista dei Post</router-link>
        <router-link to="/create-post">Create Post</router-link>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 10px;
    color: white;
    display: flex;
    justify-content: space-between;
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
  }
  
  .logo {
    margin-right: 10px;
  }
  
  .navbar-links {
    display: flex;
    gap: 20px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>
  