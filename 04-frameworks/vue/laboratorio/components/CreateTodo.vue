<template>
  <div class="add-button-container" v-if="!creating">
    <Button
      outlined
      @click="creating = !creating"
      class="add-button"
      aria-label="Add new task"
    >
      <i :class="icon" style="font-size: 3rem" />
    </Button>
  </div>

  <div class="form-container" v-if="creating">
    <form @submit.prevent="onSubmit">
      <h1>Nueva Tarea</h1>
      <section>
        <InputText
          id="taskname"
          v-model="taskname"
          autocomplete="off"
          placeholder="Título"
        />
        <Textarea
          v-model="description"
          rows="3"
          cols="23"
          :maxlength="100"
          placeholder="Descripción"
          @keyup="onKeyUp"
          @keydown="onKeyDown"
        />
      </section>
      <footer>
        <Button
          type="submit"
          severity="success"
          label="Guardar"
          aria-label="Save new task"
          :disabled="!taskname || !description"
        />
        <Button
          severity="danger"
          label="Cancelar"
          @click="onCancel"
          aria-label="Cancel new task"
        />
      </footer>
    </form>
  </div>
</template>

<script setup lang="ts">
const creating = ref(false)
const taskname = ref('')
const description = ref('')

const onSubmit = () => {
  load()
  const { addTodo } = useTodos()
  addTodo(taskname.value, description.value)
}

const onCancel = () => {
  creating.value = false
  taskname.value = ''
  description.value = ''
}

const icon = ref('pi pi-plus')

const load = () => {
  creating.value = false
  icon.value = 'pi pi-check'
  setTimeout(() => {
    icon.value = 'pi pi-plus'
    taskname.value = ''
    description.value = ''
  }, 1000)
}

const shiftPressed = ref(false)

const onKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Shift') shiftPressed.value = false
  if (!shiftPressed.value && event.key === 'Enter') onSubmit()
}

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Shift') shiftPressed.value = true
}
</script>

<style scoped>
.add-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 265px;
  width: 300px;
}

.form-container {
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  height: 265px;
  width: 300px;
}

.add-button {
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.5rem;
}

h1 {
  color: #64748b;
  font-size: 16px;
  margin: 0;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 100%;
}

section > span,
input,
textarea {
  width: 100%;
  resize: none;
}

label {
  color: #64748b;
}

footer {
  display: flex;
  justify-content: center;
  gap: 1em;
}
</style>
