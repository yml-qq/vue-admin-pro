<template>
  <div class="home">home</div>
  <div class="w-100px h-100px" u-bg="red-200"></div>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <i-mdi-account />
  <el-icon :size="20" color="#ff6600">
    <IMdiAccount />
  </el-icon>
  <i-mdi-account-edit-outline />
  <i-custom-dark />
  <el-button plain type="warning">Warning</el-button>
</template>

<script></script>

<style scoped>
.home {
  background: linear-gradient(to bottom, white, black);
  box-shadow: rgb(34 137 52 / 85%) 2px 10px 10px;
  transition: all 0.5s;
  user-select: none;
}
</style>
