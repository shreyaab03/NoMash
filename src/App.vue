<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import JSONLab from './components/JSONLab.vue';
import BHeader from './components/BHeader.vue';
import LibraryRegistrationForm from './views/HomeView.vue';

const isAuthenticated = ref(false); 
const router = useRouter();

const logout = () => {
  isAuthenticated.value = false;
  router.push('/login'); 
};
</script>

<template>
  <header>
    <BHeader :isAuthenticated="isAuthenticated" @logout="logout" />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

.form {
  text-align: center;
  margin-top: 50px;
}

#username:focus,
#password:focus,
#isAustralian:focus,
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}
</style>
