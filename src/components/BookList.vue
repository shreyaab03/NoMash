<template>
    <div>
      <!-- Add your book list display code here -->
      <h2>Book List</h2>
      <ul>
        <!-- Example static book items, replace with dynamic data as needed -->
        <li v-for="book in books" :key="book.isbn">{{ book.name }} (ISBN: {{ book.isbn }})</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [
          { isbn: 1234567890, name: "Example Book 1" },
          { isbn: 2345678901, name: "Example Book 2" },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 5px 0;
  }
  </style>
  