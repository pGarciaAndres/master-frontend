export type ChatRecord = {
  message: string
  timestamp?: number
  sender: 'user' | 'ai' | 'system'
}

export type ChatId = string

export type Conversation = {
  [chatId: string]: { title: string; messages: ChatRecord[] }
}
