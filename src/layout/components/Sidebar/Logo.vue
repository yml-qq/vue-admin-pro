<template>
  <div :class="{ collapse: isCollapse }" class="sidebar-logo-container">
    <transition name="sidebarlogofade">
      <router-link v-if="isCollapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="imgUrl" :src="imgUrl" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">vue-admin-pro</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="imgUrl" :src="imgUrl" class="sidebar-logo" />
        <h1 class="sidebar-title">vue-admin-pro</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  isCollapse: boolean;
}

withDefaults(defineProps<Props>(), {
  isCollapse: true
});

const imgUrl = ref("https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png");
</script>

<style lang="scss" scoped>
.sidebarlogofade-enter-active {
  transition: opacity 1.5s;
}

.sidebarlogofade-enter,
.sidebarlogofade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;
  text-align: center;
  background: #2b2f3a;
  line-height: 50px;

  .sidebar-logo-link {
    width: 100%;
    height: 100%;

    .sidebar-logo {
      display: inline-block;
      margin-right: 12px;
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }

    .sidebar-title {
      display: inline-block;
      margin: 0;
      font-size: 14px;
      font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      vertical-align: middle;
    }
  }
}

.collapse {
  .sidebar-logo {
    margin-right: 0;
  }
}
</style>
