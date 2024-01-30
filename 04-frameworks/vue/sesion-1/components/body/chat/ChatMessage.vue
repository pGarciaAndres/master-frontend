<template>
  <div class="flex gap-3 justify-between">
    <div class="flex gap-3">
      <BodyChatAvatar :sender="record.sender" />
      <p>{{ record.message }}</p>
    </div>
    <time class="text-sm">{{ formattedTime }}</time>
  </div>
</template>

<script setup lang="ts">
import type { ChatRecord } from '~/types'

const props = defineProps<{
  record: ChatRecord
}>()

const formattedTime = computed(() => {
  if (!props.record.timestamp) return
  const date = new Date(props.record.timestamp)
  return `${date.getHours()}:${date.getMinutes()}`
})
</script>
