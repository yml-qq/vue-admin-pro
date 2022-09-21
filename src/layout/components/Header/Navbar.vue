<template>
  <div class="navbar">
    <Hamburger :isActive="isCollapse" class="hambuger-container" @onToggleClick="toggleSidebar"></Hamburger>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import Hamburger from "@/components/Hamburger/index.vue";
import { useNavbar } from "@/layout/hooks/useNavbar";

const { isCollapse, toggleSideBar } = useNavbar();

const toggleSidebar = () => {
  toggleSideBar();
};
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  overflow: hidden;
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .hambuger-container {
    float: left;
    height: 100%;
    line-height: 60px;
    cursor: pointer;
  }
}
</style>
