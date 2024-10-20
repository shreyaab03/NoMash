<template>
    <div id="app">
      <h1>Books API Data</h1>
      <button @click="getBookData">Get Book Data</button>
      
      <div v-if="bookData">
        <h2>Books List</h2>
        <pre>{{ bookData }}</pre>
      </div>
      
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        bookData: null,
        error: null,
      };
    },
    methods: {
      async getBookData() {
        try {
          const response = await axios.get('https://countbooks-otzoyaur7q-uc.a.run.app/');
          
          this.bookData = response.data;
          this.error = null;
        } catch (error) {
          console.error('Error fetching book data:', error);
          this.error = 'Error fetching book data';
          this.bookData = null;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  