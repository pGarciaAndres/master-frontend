<template>
  <div class="headbar">
    <img class="logo" src="/vue_logo.png" alt="Logo" />
    <h1>Task Manager</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.headbar {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
}

.logo {
  width: 3em;
}
</style>
