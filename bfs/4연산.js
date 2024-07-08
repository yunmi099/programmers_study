let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [s, t] = input[0].split(" ").map(Number);
let queue = [];
queue.push([s, ""]);
let visited = new Set([s]);
let found = false;
if (s == t) {
  console.log(0);
}
while (queue.length) {
  let [value, opers] = queue.shift();
  if (value > 1e9) continue;
  if (value === t) {
    console.log(opers);
    found = true;
    break;
  }
  for (let oper of ["*", "+", "-", "/"]) {
    let nextValue = value;
    if (oper === "*") nextValue *= value;
    if (oper === "+") nextValue += value;
    if (oper === "-") nextValue -= value;
    if (oper === "/" && value !== 0) nextValue = 1;
    if (!visited.has(nextValue)) {
      queue.push([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);
