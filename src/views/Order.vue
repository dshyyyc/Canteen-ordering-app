<script setup>
import { ref, reactive, computed } from "vue";
import navBar from "@/components/NavBar.vue";
import sHeader from "@/components/Header.vue";
import { useOrderStore } from "@/stores/order";
import { padNumber } from "@/common/js/util.js";

const order = useOrderStore();
const orderListLength = computed(() => order.orderList.length);
const reversedOrderList = computed(() => order.orderList.slice().reverse());
function payOrder(orderIndex) {
  order.orderList[orderIndex].pay = "支付成功";
}
</script>

<template>
  <sHeader />
  <div
    style="
      margin-left: 16px;
      margin-top: 70px;
      margin-bottom: 10px;
      font-size: 20px;
    "
  >
    全部订单
  </div>
  <div class="order-group">
    <div v-for="(order, index) in reversedOrderList" class="order-detail">
      <div style="overflow: scroll; flex: 1">
        <div v-for="dish in order.dishInfo">
          {{ dish.name }}×{{ dish.count }}
        </div>
      </div>
      <div class="detail-right">
        <div style="">
          订单编号: {{ padNumber(orderListLength - index, 6) }}
        </div>
        <div style="font-size: 24px; text-align: center">
          ¥{{ order.total }}
        </div>
        <button @click="payOrder(orderListLength - index - 1)">
          {{ order.pay }}
        </button>
      </div>
    </div>
  </div>

  <navBar />
</template>

<style lang="less" scoped>
.order-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
}
.order-detail {
  height: 100px;
  border-radius: 16px;
  margin: 5px 10px 5px 10px;
  padding: 15px 30px 15px 30px;
  background-color: #fff;
  display: flex;
  .detail-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin: 5px;
      padding: 5px;
      border: none;
      width: 80px;
      border-radius: 12px;
      background-color: #ffe500;
    }
    div {
      margin: 5px;
    }
  }
}
</style>
