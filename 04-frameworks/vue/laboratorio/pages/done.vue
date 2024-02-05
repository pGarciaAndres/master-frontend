<template>
  <TodoList :todos="doneTodos" />
</template>

<script setup lang="ts">
const { getDoneTodos } = useTodos()
const doneTodos = computed(() => getDoneTodos())
</script>
