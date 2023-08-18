<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup>
import { useRouter, RouterView } from "vue-router";
</script>

<style lang="less" scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  margin: 0;
}
</style>
