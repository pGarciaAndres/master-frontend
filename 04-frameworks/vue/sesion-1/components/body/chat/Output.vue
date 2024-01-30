<template>
  <output
    ref="output"
    class="border rounded-md p-3 max-h-[65dvh] overflow-y-auto"
  >
    <BodyChatMessage
      v-for="message in conversation"
      :key="message.timestamp"
      :record="message"
      class="mb-3"
    />
  </output>
</template>

<script setup lang="ts">
import type { ChatRecord } from '~/types'

defineProps<{
  conversation: ChatRecord[]
}>()

const output = ref<HTMLOutputElement | null>(null)

onMounted(() => {
  if (!output.value) return

  output.value.scrollTop = output.value.scrollHeight
})

onUpdated(() => {
  if (!output.value) return

  output.value.scrollTop = output.value.scrollHeight
})
</script>
