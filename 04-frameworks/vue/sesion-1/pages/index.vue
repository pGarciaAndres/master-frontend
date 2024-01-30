<template>
  <main class="flex-grow flex flex-col pl-2">
    <h1>Welcome!</h1>

    <form class="mt-4" @submit.prevent="onSubmit">
      <input
        type="text"
        v-model="title"
        class="block mb-2 w-full border-2 border-gray-300 rounded-md p-2 text-black"
        placeholder="Title"
      />

      <input
        type="text"
        v-model="systemGoal"
        class="block mb-2 w-full border-2 border-gray-300 rounded-md p-2 text-black"
        placeholder="Eres... quiero..."
      />
      <button class="bg-teal-500 p-2 rounded-md">New Chat</button>
    </form>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
const chatHistory = useChatHistory()

const title = ref('')
const systemGoal = ref('')

const onSubmit = () => {
  if (!systemGoal.value || !title.value) return

  const { chatId } = chatHistory.registerChat(title.value, systemGoal.value)

  router.push(`/c/${chatId}`)
}
</script>
