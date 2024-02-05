<template>
  <div class="todolist-container">
    <CreateTodo v-if="router.currentRoute.value.path !== '/deleted'" />
    <div class="todolist" v-for="todo in props.todos">
      <Todo :todo="todo" class="todo" />
    </div>
  </div>
  <div class="no-tasks" v-if="props.todos.length === 0">
    <h2>No hay tareas pendientes</h2>
    <img src="/coffee.png" alt="No Tasks" />
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '~/types'
const router = useRouter()

const props = defineProps<{
  todos: Todo[]
}>()
</script>

<style scoped>
.todolist-container {
  display: flex;
  gap: 0.8em;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 1em;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
}

.todolist {
  flex-grow: 1;
  width: 300px;
}

.no-tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  filter: grayscale(1);
  width: 100%;
}

.no-tasks img {
  width: 200px;
}
</style>
