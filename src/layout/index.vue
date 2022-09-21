<template>
  <div :class="set.classes" class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <Header></Header>
      <div class="main"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/layout/components/Sidebar/index.vue";
import Header from "@/layout/components/Header/index.vue";
import { useAppStoreHook } from "@/store/moudules/app";
import { setType } from "./types";

const set: setType = reactive({
  sidebar: computed(() => {
    return useAppStoreHook().sidebar;
  }),
  classes: computed(() => {
    return {
      "hide-sidebar": !set.sidebar.opened,
      "open-sidebar": set.sidebar.opened
    };
  })
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.app-wrapper {
  width: 100%;
  height: 100%;

  .header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 60;
    width: calc(100% - $sideBarWidth);
    height: 100px;
    border: 1px solid #333;
  }
}
</style>
