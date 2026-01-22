import { ref } from 'vue'

const isSidebarOpen = ref(false)

export function useLayout() {
  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function openSidebar() {
    isSidebarOpen.value = true
  }

  function closeSidebar() {
    isSidebarOpen.value = false
  }

  return {
    isSidebarOpen,
    toggleSidebar,
    openSidebar,
    closeSidebar,
  }
}
