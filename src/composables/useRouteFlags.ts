import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useRouteFlags() {
  const route = useRoute()

  const isChatOrSettingsPage = computed(() => {
    return (
      route.name === 'Chat' ||
      route.name === 'ChatId' ||
      route.name === 'ChatEmpty' ||
      route.name === 'Settings'
    )
  })

  return {
    isChatOrSettingsPage,
  }
}
