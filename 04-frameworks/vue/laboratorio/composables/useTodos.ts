import type { Todo } from '~/types'

export const useTodos = defineStore(
  'todos',
  () => {
    const todos = ref<Todo[]>([])

    const getTodos = () => {
      return todos.value.filter((t) => !t.isDone && !t.isDeleted) || []
    }

    const getDoneTodos = () => {
      return todos.value.filter((t) => t.isDone && !t.isDeleted) || []
    }

    const getDeletedTodos = () => {
      return todos.value.filter((t) => t.isDeleted) || []
    }

    const getAllTodos = () => {
      return todos.value || []
    }

    const addTodo = (taskname: string, description: string) => {
      if (!taskname) return

      todos.value = [
        {
          id: crypto.randomUUID(),
          title: taskname,
          description,
          isDone: false,
          isDeleted: false,
          timestamp: new Date().getTime()
        },
        ...todos.value
      ]
    }

    const deleteTodo = (id: string) => {
      const index = todos.value.findIndex((t) => t.id === id)

      if (index > -1) {
        todos.value = [
          ...todos.value.slice(0, index),
          {
            ...todos.value[index],
            isDeleted: true
          },
          ...todos.value.slice(index + 1)
        ]
      }
    }

    const destroyDeletedTodos = () => {
      todos.value = todos.value.filter((t) => !t.isDeleted)
    }

    const updateTodo = (todo: Todo) => {
      const index = todos.value.findIndex((t) => t.id === todo.id)

      if (index > -1) {
        todos.value = [
          ...todos.value.slice(0, index),
          todo,
          ...todos.value.slice(index + 1)
        ]
      }
    }

    return {
      todos,
      getTodos,
      getDoneTodos,
      getDeletedTodos,
      getAllTodos,
      addTodo,
      deleteTodo,
      destroyDeletedTodos,
      updateTodo
    }
  },
  {
    persist: true
  }
)
