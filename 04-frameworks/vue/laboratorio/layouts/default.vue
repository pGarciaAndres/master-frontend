<template>
  <div class="layout">
    <Headbar />
    <Navbar class="navbar" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'primeicons/primeicons.css'
</script>

<style>
body {
  margin: 0;
}

.navbar {
  background: none;
  border: none;
  @media screen and (min-width: 960px) {
    width: fit-content;
  }
}
</style>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: #1f2937;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
</style>
