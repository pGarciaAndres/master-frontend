<template>
  <TodoList :todos="todos" />
</template>

<script setup lang="ts">
const { getTodos } = useTodos()
const todos = computed(() => getTodos())
</script>
