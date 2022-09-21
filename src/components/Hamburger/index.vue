<template>
  <div class="hambuger" @click="$emit('onToggleClick')">
    <el-icon :class="{ 'is-active': isActive }" :size="23" color="#262626">
      <IMdiFormatIndentDecrease></IMdiFormatIndentDecrease>
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  isActive?: boolean;
}
withDefaults(defineProps<Props>(), {
  isActive: false
});
</script>

<style lang="scss" scoped>
.hambuger {
  padding: 0 14px;

  &:hover {
    background: #f7f7f7;
  }

  .is-active {
    transform: rotate(180deg);
  }
}
</style>
