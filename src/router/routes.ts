import DefaultLayout from '@/layouts/default.vue'
import Home from '@/pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'Root',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'tasks',
        name: 'Tasks',
        component: () => import('@/pages/tasks/index.vue'),
        meta: {
          title: 'Task',
          headerTitle: 'Explore Task',
        },
      },
      {
        path: 'tasks/:id',
        name: 'TasksId',
        component: () => import('@/pages/tasks/id.vue'),
        meta: {
          title: 'Task',
          headerTitle: 'Detail Task',
        },
      },
      {
        path: 'mentors',
        name: 'Mentors',
        component: () => import('@/pages/mentors.vue'),
        meta: {
          title: 'Mentors',
          headerTitle: 'Explore Mentors',
        },
      },
      {
        path: 'chat',
        name: 'Chat',
        component: () => import('@/pages/chat/index.vue'),
        meta: {
          title: 'Chat',
          headerTitle: 'Message',
        },
        redirect: { name: 'ChatEmpty' },
        children: [
          {
            path: '',
            name: 'ChatEmpty',
            component: () => import('@/pages/chat/chat-empty.vue'),
          },
          {
            path: ':id',
            name: 'ChatId',
            component: () => import('@/pages/chat/id.vue'),
            meta: {
              title: 'Chat',
              headerTitle: 'Message',
            },
          },
        ],
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/pages/settings.vue'),
        meta: {
          title: 'Settings',
          headerTitle: 'Settings',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/layouts/error.vue'),
  },
]

export default routes
