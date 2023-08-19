<script setup lang="ts">
import Card from './components/Card.vue';
import HelloWorld from './components/HelloWorld.vue'
import LoginForm from './components/LoginForm.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main>
    <Card>
      <LoginForm />
    </Card>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
