<template>
  <header class="simple-header">
    <div class="simple-header-name">食堂点餐</div>
  </header>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>

<style lang="less" scoped>
.simple-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #ffe500;
  box-sizing: border-box;
  .simple-header-name {
    font-size: 24px;
    // color: #666;
  }
}
</style>
