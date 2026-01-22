import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const DEFAULT_TITLE = 'DNX'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE
})
export default router
