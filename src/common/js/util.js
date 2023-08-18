export const menuFromBackend = [
  {
    category: "早餐",
    menu: {
      "001": {
        name: "包子",
        price: 1.0,
        stock: 300,
      },
      "002": {
        name: "油条",
        price: 0.5,
        stock: 500,
      },
      "003": {
        name: "馒头",
        price: 0.2,
        stock: 300,
      },
    },
  },
  {
    category: "午餐",
    menu: {
      "004": {
        name: "鱼香肉丝",
        price: 9.0,
        stock: 200,
      },
      "005": {
        name: "宫保鸡丁",
        price: 10.0,
        stock: 300,
      },
      "006": {
        name: "回锅肉",
        price: 8.0,
        stock: 300,
      },
      "007": {
        name: "地三鲜",
        price: 9.0,
        stock: 200,
      },
      "008": {
        name: "番茄炒蛋",
        price: 10.0,
        stock: 300,
      },
      "009": {
        name: "豇豆茄子",
        price: 8.0,
        stock: 300,
      },
      "010": {
        name: "剁椒鱼头",
        price: 9.0,
        stock: 200,
      },
      "011": {
        name: "糖醋里脊",
        price: 10.0,
        stock: 300,
      },
      "012": {
        name: "锅包肉",
        price: 8.0,
        stock: 300,
      },
    },
  },
  {
    category: "晚餐",
    menu: {
      "013": {
        name: "鸡蛋汤",
        price: 3.0,
        stock: 400,
      },
      "014": {
        name: "蛋炒饭",
        price: 10.0,
        stock: 500,
      },
      "015": {
        name: "汤面",
        price: 9.0,
        stock: 300,
      },
    },
  },
];

// 将数字补全为x位
export function padNumber(number, width) {
  const numString = number.toString();
  const diff = width - numString.length;

  if (diff <= 0) {
    return numString;
  }

  const padding = "0".repeat(diff);
  return padding + numString;
}
