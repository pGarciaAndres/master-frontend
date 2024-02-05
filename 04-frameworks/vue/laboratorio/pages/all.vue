<template>
  <TodoList :todos="allTodos" />
</template>

<script setup lang="ts">
const { getAllTodos } = useTodos()
const allTodos = computed(() => getAllTodos())
</script>
