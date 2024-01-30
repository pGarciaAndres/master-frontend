<template>
  <BodyChat :chatId="chatId" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const chatId = computed(() => route.params.chatId as string)
</script>
