// primitive
let str = "hello";
const strConst = "hello";
let strAsConst = "hello" as const;

// object
const config = {
  baseUrl: "/abcd",
  timeout: 5000,
};

const configAsConst = {
  baseUrl: "/abcd",
  timeout: 5000,
} as const;

// array
const colors = ["red", "green", "blue"];
const colorAsConst = ["red", "green", "blue"] as const;
