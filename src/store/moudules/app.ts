import { defineStore } from "pinia";
import { appType } from "./types";

const useAppStore = defineStore({
  id: "app-dep",
  state: (): appType => {
    return {
      sidebar: {
        opened: true
      }
    };
  },
  getters: {
    getSidebarStatus(): boolean {
      return this.sidebar.opened;
    }
  },
  actions: {
    ToggleSidebar() {
      this.sidebar.opened = !this.sidebar.opened;
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: sessionStorage, paths: ["sidebar"] }]
  }
});

export function useAppStoreHook() {
  return useAppStore();
}
