<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">Login</h1>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input 
                type="text" 
                id="username" 
                class="form-control" 
                v-model="username" 
                required 
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input 
                type="password" 
                id="password" 
                class="form-control" 
                v-model="password" 
                required 
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div v-if="error" class="text-danger mt-3">{{ error }}</div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const error = ref(null);
  
  const hardcodedUsername = 'user';
  const hardcodedPassword = 'password';
  
  const login = () => {
  console.log('Attempting login with:', username.value, password.value);
  if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
    console.log('Login successful, navigating to About');
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/about').catch(err => console.error('Navigation error:', err));
  } else {
    console.log('Login failed, incorrect credentials');
    error.value = 'Invalid username or password';
  }
};

  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: 0 auto;
    padding-top: 50px;
  }
  </style>
  