const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = input.shift();
let garden = [];
let visited = [];
for (let i = 0; i < n; i++) {
  garden.push(input[i].split(" ").map(Number));
  visited.push(Array.from({ length: n }).fill(0));
}
let res = 0;
const maxDepth = n > 2 ? 4 : 2;
const move = [
  [1, 0],
  [0, 1],
];
const dfs = (depth, sum, maxDepth) => {
  if (depth === maxDepth) {
    res = Math.max(sum, res);
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) continue;
      for (let [x, y] of move) {
        let nextI = i + x;
        let nextJ = j + y;

        if (
          nextI >= 0 &&
          nextI < n &&
          nextJ >= 0 &&
          nextJ < n &&
          visited[nextI][nextJ] === 0
        ) {
          visited[i][j] = 1;
          visited[nextI][nextJ] = 1;
          dfs(depth + 1, sum + garden[i][j] + garden[nextI][nextJ], maxDepth);
          visited[i][j] = 0;
          visited[nextI][nextJ] = 0;
        }
      }
    }
  }
};

dfs(0, 0, maxDepth);
console.log(res);
