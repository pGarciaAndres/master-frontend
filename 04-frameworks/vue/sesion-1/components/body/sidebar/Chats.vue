<template>
  <div class="p-2 h-full flex flex-col justify-between">
    <ul>
      <li v-for="chat in chats" class="mb-2 flex justify-between">
        <NuxtLink :to="`/c/${chat.chatId}`">{{
          chat.title || chat.chatId
        }}</NuxtLink>
        <button
          @click="chatHistory.removeChat(chat.chatId)"
          class="hover:text-red-600"
        >
          <Icon name="ep:delete-filled" class="hover:text-red-400" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const chatHistory = useChatHistory()
const chats = computed(() => chatHistory.getChatIds())
</script>
