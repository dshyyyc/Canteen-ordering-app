import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", () => {
  const orderList = reactive([]);

  function createOrder() {
    const orderObj = {
      total: 14,
      time: "",
      dishInfo: {
        "001": {
          name: "鱼香肉丝",
          price: 7,
          count: 2,
        },
      },
    };
    orderList.push(orderObj); // 添加订单
  }

  return { orderList };
});
