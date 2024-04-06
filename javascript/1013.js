/*O maior*/
const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split(" ");

const [A, B, C] = input.split(" ").map(item => parseInt(item));

const MaiorAB = (A + B + Math.abs(A - B)) / 2;
const MaiorABC = (C + MaiorAB + Math.abs(C - MaiorAB)) / 2;

console.log(MaiorABC + " eh o maior");