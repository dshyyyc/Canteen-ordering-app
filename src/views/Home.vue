<script setup>
import { ref, reactive, computed } from "vue";
import navBar from "@/components/NavBar.vue";
import sHeader from "@/components/Header.vue";
import menuFromBackend from "@/common/js/util.js";
import { useRouter } from "vue-router";
import { useOrderStore } from "@/stores/order";

const state = reactive({ category: 0, checkedList: {} });
const router = useRouter();
const order = useOrderStore();
const show = ref(false);

function changeCategory(item) {
  state.category = item;
  state.checkedList = {}; // 切换早午晚餐时,清空选中列表
}

const currentMenu = computed(() => {
  const category = state.category;
  return menuFromBackend[category].menu;
});

const totalPrice = computed(() => {
  let currentPrice = 0;
  //   console.log(state.checkedList);
  for (const id in state.checkedList) {
    const count = state.checkedList[id];
    const price = currentMenu.value[id].price;
    currentPrice += count * price;
  }
  currentPrice = currentPrice.toFixed(1);
  return currentPrice;
});

function removeDish(id) {
  state.checkedList[id]--;
}

function addDish(id) {
  state.checkedList[id] ? state.checkedList[id]++ : (state.checkedList[id] = 1);
  console.log(totalPrice.value);
}

function showDatail(event) {
  const element = event.target;
  if (element.tagName !== "BUTTON") {
    if (!show.value) {
      show.value = true;
    } else {
      show.value = false;
    }
  }
}

function createOrder() {
  console.log("checkedList:", state.checkedList);
  order.submitOrder();
  //   router.push("/order");
}
</script>

<template>
  <sHeader />
  <div class="home">
    <div class="left-list">
      <van-sidebar
        v-model="state.category"
        @change="changeCategory"
        class="sidebar"
      >
        <van-sidebar-item title="早餐" class="sidebar-item" />
        <van-sidebar-item title="午餐" class="sidebar-item" />
        <van-sidebar-item title="晚餐" class="sidebar-item" />
      </van-sidebar>
    </div>
    <div class="right-list">
      <van-cell-group v-for="(item, key) in currentMenu">
        <van-cell :title="item.name" :value="key" class="cell-item">
          <div class="price">¥{{ item.price }}</div>
          <div class="count">
            <van-button
              icon="minus"
              round
              plain
              size="small"
              type="default"
              :disabled="!state.checkedList[key]"
              @click="removeDish(key)"
            ></van-button>
            <span class="count-display">{{ state.checkedList[key] || 0 }}</span>
            <van-button
              icon="plus"
              round
              plain
              size="small"
              type="default"
              @click="addDish(key)"
            ></van-button>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="settle-order" @click="showDatail">
      <span style="position: absolute; left: 20px">总价格:</span>
      <span class="total-price">¥{{ totalPrice }}</span>
      <button class="settle-button" @click="createOrder">提交订单</button>
    </div>
    <van-popup
      v-model:show="show"
      position="bottom"
      round
      :style="{ height: '300px' }"
    >
      <ul class="detail-info">
        <li
          v-for="(value, key) in state.checkedList"
          :key="key"
          style="margin-left: 15px; margin-bottom: 5px"
        >
          <div v-show="value">
            <span>{{ currentMenu[key].name }}×{{ value }}</span>
            <span style="float: right"
              >¥{{ currentMenu[key].price * value }}</span
            >
          </div>
        </li>
      </ul>
    </van-popup>
  </div>
  <navBar />
</template>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  margin-top: 60px;
  padding: 0;
  background-color: #ffe500;
  display: flex;
  position: fixed;
  .left-list {
    // position: absolute;
    width: 25%;
    padding-top: 30px;
    border-right: 1px;
    background-color: #fff;
    // border-radius: 16px 0 0 0;
    overflow-y: hidden;
    .sidebar {
      width: 100%;
      .sidebar-item {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
      }
    }
  }
  .right-list {
    flex: 1;
    padding-top: 30px;
    background-color: #fff;
    // border-radius: 0 16px 0 0;
    overflow: scroll;
    padding-bottom: 180px;
    .cell-item {
      height: 100px;
      font-size: 20px;
      display: flex;
      align-items: center;
      padding-left: 40px;
      padding-right: 10px;
      .price {
        height: 36px;
        display: flex;
        justify-content: center;
      }
      .count {
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        .count-display {
          margin: 0 10px 0 10px;
        }
      }
    }
  }
  .settle-order {
    height: 50px;
    width: 80%;
    position: fixed;
    margin: 0 10% 0 10%;
    bottom: 60px;
    border-radius: 20px;
    background-color: #242319;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    .total-price {
      position: absolute;
      left: 100px;
      font-size: 28px;
    }
    .settle-button {
      position: absolute;
      right: 0;
      height: 50px;
      width: 100px;
      border-radius: 0 20px 20px 0;
      border: none;
      background-color: #ffe500;
      color: #242319;
    }
  }
  .detail-info {
    padding: 50px;
    font-size: 18px;
    height: 100px;
    width: 250px;
    overflow: auto;
    padding-bottom: 100px;
  }
}
</style>
