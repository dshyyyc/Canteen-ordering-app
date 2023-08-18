import { ref } from "vue";
import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", () => {
  const orderList = ref([]);
  function createOrder() {
    const orderObj = {
      orderID: "001",
      orderDetail: {
        "001": {
          name: "鱼香肉丝",
          price: 7,
          count: 2,
        },
        "002": {
          name: "宫保鸡丁",
          price: 9,
          count: 1,
        },
      },
    };
    orderList.push(orderObj); // 添加订单
  }
  function submitOrder(orderDetail) {
    console.log("orderDetail:", orderDetail);
    // orderList.push();
  }
  return { orderList, submitOrder };
});
