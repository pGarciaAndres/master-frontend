<template>
  <div class="flex p-2 flex-1 grid grid-rows-[3fr,1fr]">
    <BodyChatOutput :conversation="conversation" />
    <form @submit.prevent="onSubmit" class="flex mt-2">
      <textarea
        v-model="message"
        row="10"
        class="w-full border-2 border-gray-300 bg-transparent rounded-l-lg"
        @keyup="onKeyUp"
        @keydown="onKeyDown"
      ></textarea>
      <button type="submit" class="rounded-r-lg bg-teal-500 w-20">
        <Icon name="ep:arrow-up-bold" color="white" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  chatId: string
}>()

const message = ref('')
const chatHistory = useChatHistory()
const conversation =
  computed(() => chatHistory.getConversation(props.chatId)) || []

const { getCompletion } = useAI()

// Submit new message
const onSubmit = () => {
  if (!message.value) return

  // Send to OpenAI
  getCompletion(message.value, conversation.value).then(
    ({ response, error }) => {
      if (error) {
        console.error(error)
        return
      }

      if (!response) {
        console.error('No response')
        return
      }

      // Add response to chat history
      chatHistory.addMessage(
        {
          message: response,
          timestamp: new Date().getTime(),
          sender: 'ai'
        },
        props.chatId
      )
    }
  )

  // Add user message to chat history
  chatHistory.addMessage(
    {
      message: message.value,
      timestamp: new Date().getTime(),
      sender: 'user'
    },
    props.chatId
  )

  // Clear
  message.value = ''
}

const shiftPressed = ref(false)

//Send on Enter
const onKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Shift') shiftPressed.value = false
  if (!shiftPressed.value && event.key === 'Enter') onSubmit()
}

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Shift') shiftPressed.value = true
}
</script>
