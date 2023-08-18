<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link
        to="home"
        class="nav-list-item"
        :class="{
          'active-link': $route.path === '/home' || $route.path === '/settle',
        }"
      >
        <span>点餐</span>
      </router-link>
      <router-link
        to="order"
        class="nav-list-item"
        :class="{ 'active-link': $route.path === '/order' }"
      >
        <span>订单</span>
      </router-link>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
@import "../common/style/base";
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  line-height: 50px;
  z-index: 1000;
  //   background-color: #4d4d4d; //   transform: translateZ(0);
  background: #ffe500;

  backdrop-filter: blur(3px); // 毛玻璃

  .nav-list {
    // width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #242319;
      span {
        font-size: 20px;
      }
    }
    .active-link {
      background-color: #242319 !important;
      color: #fff;
    }
  }
}
</style>
