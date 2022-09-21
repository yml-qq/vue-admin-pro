import { useAppStoreHook } from "@/store/moudules/app";

export function useNavbar() {
  const appStore = useAppStoreHook();

  const isCollapse = computed(() => {
    return !appStore.getSidebarStatus;
  });

  function toggleSideBar() {
    appStore.ToggleSidebar();
  }
  return {
    isCollapse,
    toggleSideBar
  };
}
