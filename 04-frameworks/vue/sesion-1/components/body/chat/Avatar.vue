<template>
  <div>
    <BodyChatOpenAiIcon
      aria-label="OpenAI Logo"
      class="rounded-full size-10 bg-green-200 p-1"
      v-if="sender === 'ai'"
    />
    <BodyChatUserIcon
      aria-label="User Logo"
      class="rounded-full size-10 bg-gray-100"
      v-if="sender === 'user'"
    />
  </div>
</template>

<script setup lang="ts">
import type { ChatRecord } from '~/types'

defineProps<{
  sender: ChatRecord['sender']
}>()
</script>
