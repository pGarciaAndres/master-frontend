import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type ChatId, type ChatRecord, type Conversation } from '~/types'

export const generateId = () => {
  const id = Math.random().toString(36).substring(2, 15)
  return id
}

export const useChatHistory = defineStore(
  'chatHistory',
  () => {
    const conversations = ref<Conversation>({})

    const removeChat = (chatId: ChatId) => {
      const router = useRouter()
      delete conversations.value[chatId]
      if (router.currentRoute.value.path.includes(`/c/${chatId}`))
        router.push(`/`)
    }

    const getConversation = (chatId: ChatId) => {
      return conversations.value[chatId]?.messages || []
    }

    const addMessage = (message: ChatRecord, chatId: ChatId) => {
      conversations.value[chatId].messages.push(message)
    }

    const getChatIds = () => {
      const chatIds = Object.keys(conversations.value).map((chatId) => {
        return { chatId, title: conversations.value[chatId]?.title }
      })
      return chatIds
    }

    const registerChat = (title: string, systemGoal: string) => {
      const chatId = generateId()

      conversations.value[chatId] = {
        title,
        messages: [
          {
            sender: 'system',
            message: systemGoal
          }
        ]
      }

      return { chatId }
    }

    return {
      conversations,
      addMessage,
      removeChat,
      getConversation,
      getChatIds,
      generateId,
      registerChat
    }
  },
  {
    persist: true
  }
)
