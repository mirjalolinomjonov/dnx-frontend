export interface IChatListItem {
  id: number | string
  user: {
    id: number | string
    name: string
    avatar: string | null
    isOnline: boolean
  }
  lastMessage: {
    text: string
    type: 'text' | 'image' | 'file'
    createdAt: string
    isRead: boolean
    isMine: boolean
  }
  unreadCount: number
}

export interface IMsg {
  id: number | string
  senderId: number | string
  type: 'text' | 'image' | 'file'
  text?: string
  file?: {
    url: string
    name: string
    size: number
    mime: string
  }
  createdAt: string
  status: 'sent' | 'delivered' | 'read'
}
