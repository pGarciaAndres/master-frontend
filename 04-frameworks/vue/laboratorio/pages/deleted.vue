<template>
  <TodoList :todos="deletedTodos" />
</template>

<script setup lang="ts">
const { getDeletedTodos } = useTodos()
const deletedTodos = computed(() => getDeletedTodos())
</script>
