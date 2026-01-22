import type { IChatListItem, IMsg } from '@/types/chat.type'

export const chats: IChatListItem[] = [
  {
    id: 1,
    user: {
      id: 12,
      name: 'Angelo Crison',
      avatar: '/avatars/angelo.png',
      isOnline: true,
    },
    lastMessage: {
      text: 'You: Sure! We will...',
      type: 'text',
      createdAt: '2026-01-21T09:12:00Z',
      isRead: true,
      isMine: true,
    },
    unreadCount: 0,
  },
  {
    id: 2,
    user: {
      id: 15,
      name: 'Jakob Sova',
      avatar: '/avatars/jakob.png',
      isOnline: false,
    },
    lastMessage: {
      text: 'Can you help me with...',
      type: 'text',
      createdAt: '2026-01-21T08:55:00Z',
      isRead: false,
      isMine: false,
    },
    unreadCount: 2,
  },
]
export const messages: IMsg[] = [
  {
    id: 100,
    senderId: 'me',
    type: 'text',
    text: 'Morning Angelie, I have question about My Task',
    createdAt: '11:52',
    status: 'delivered',
  },
  {
    id: 101,
    senderId: 12,
    type: 'text',
    text: 'Yes sure, Any problem with your assignment?',
    createdAt: '11:53',
    status: 'read',
  },
  {
    id: 102,
    senderId: 'me',
    type: 'image',
    text: 'How to make a responsive display from the dashboard?',
    file: {
      url: 'https://picsum.photos/500/300',
      name: 'dashboard.png',
      size: 234000,
      mime: 'image/png',
    },
    createdAt: '11:53',
    status: 'delivered',
  },
  {
    id: 103,
    senderId: 'me',
    type: 'text',
    text: 'Is there a plugin to do this task?',
    createdAt: '11:54',
    status: 'read',
  },
  {
    id: 104,
    senderId: 12,
    type: 'text',
    text: 'No plugins. You just have to make it smaller according to the size of the phone.',
    createdAt: '11:55',
    status: 'read',
  },
  {
    id: 104,
    senderId: 12,
    type: 'text',
    text: "Thank you very much. I'm glad you asked about the assignment",
    createdAt: '11:56',
    status: 'read',
  },
]
