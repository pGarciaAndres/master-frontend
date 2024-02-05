<template>
  <Card :class="cardClass">
    <template #title>
      <header>
        <span v-if="!editing">
          {{ todo.title }}
        </span>
        <InputText v-if="editing" v-model="todo.title" autocomplete="off" />
        <Button
          v-if="!todo.isDeleted"
          severity="danger"
          icon="pi pi-trash"
          aria-label="Delete"
          v-on:click="deleteTodo"
          outlined
          rounded
        />
      </header>
    </template>
    <template #subtitle>{{ formatTime }}</template>
    <template #content>
      <p v-if="!editing">
        {{ todo.description }}
      </p>
      <Textarea
        v-if="editing"
        v-model="todo.description"
        rows="3"
        :maxlength="100"
      />
    </template>
    <template #footer v-if="!todo.isDeleted">
      <footer>
        <Button
          :label="todo.isDone ? 'Finalizada' : 'Finalizar'"
          severity="success"
          aria-label="Complete"
          :outlined="!todo.isDone"
          v-on:click="completeTodo"
          :disabled="editing"
        />
        <Button
          :label="editing ? 'Confirmar' : 'Editar'"
          severity="info"
          aria-label="Edit"
          :outlined="editing"
          v-on:click="editTodo"
          :disabled="todo.isDone || !todo.title || !todo.description"
        />
      </footer>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type Textarea from 'primevue/textarea'
import type { Todo } from '~/types'

const props = defineProps<{
  todo: Todo
}>()

const editing = ref(false)

const cardClass = computed(() => {
  if (props.todo.isDone) {
    return 'completed'
  } else if (props.todo.isDeleted) {
    return 'deleted'
  } else {
    return ''
  }
})

const formatTime = computed(() => {
  const date = new Date(props.todo.timestamp)
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
})

const deleteTodo = () => {
  const { deleteTodo } = useTodos()
  deleteTodo(props.todo.id)
}

const completeTodo = () => {
  const { updateTodo } = useTodos()
  updateTodo({ ...props.todo, isDone: !props.todo.isDone })
  if (editing.value) {
    editing.value = false
  }
}

const editTodo = () => {
  if (editing.value) {
    const { updateTodo } = useTodos()
    updateTodo(props.todo)
  }

  editing.value = !editing.value
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completed {
  background-color: #c2ffc7;
}

.deleted {
  background-color: #ffc2c2;
}

input {
  width: 80%;
}

textarea {
  width: 100%;
  resize: none;
}

footer {
  display: flex;
  justify-content: center;
  gap: 0.5em;
}

footer > button {
  width: 120px;
}
</style>
