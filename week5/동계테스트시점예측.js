const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MATRIX = Array.from({ length: 101 }, () => Array(101).fill(0));
const VISIT = Array.from({ length: 101 }, () => Array(101).fill(false));
const MAP = Array.from({ length: 101 }, () => Array(101).fill(0));
let countOfIce = 0;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

rl.question("", (input) => {
  const [N, M] = input.split(" ").map(Number);

  let linesRead = 0;
  const lines = [];

  rl.on("line", (line) => {
    lines.push(line);
    linesRead++;
    if (linesRead === N) {
      for (let i = 1; i <= N; i++) {
        const row = lines[i - 1].split(" ").map(Number);
        for (let j = 1; j <= M; j++) {
          MATRIX[i][j] = row[j - 1];
          if (MATRIX[i][j] === 1) {
            countOfIce++;
          }
        }
      }

      console.log(BFS(N, M));
      rl.close();
    }
  });
});

function initSetup(N, M) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      MAP[i][j] = MATRIX[i][j];
      VISIT[i][j] = false;
    }
  }
}

function checkMap(N, M) {
  const que = [];
  VISIT[1][1] = true;
  que.push([1, 1]);

  while (que.length > 0) {
    const [X, Y] = que.shift();

    for (let i = 0; i < 4; i++) {
      let nx = X + dx[i];
      let ny = Y + dy[i];

      while (
        nx > 0 &&
        nx <= N &&
        ny > 0 &&
        ny <= M &&
        !VISIT[nx][ny] &&
        MAP[nx][ny] === 0
      ) {
        VISIT[nx][ny] = true;
        que.push([nx, ny]);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (!VISIT[i][j] && MAP[i][j] === 0) {
        MAP[i][j] = -1;
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (MAP[i][j] === 1) {
        let count = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          if (nx > 0 && nx <= N && ny > 0 && ny <= M && VISIT[nx][ny]) {
            count++;
          }
        }
        if (count >= 2) {
          MATRIX[i][j] = 0;
          countOfIce--;
        }
      }
    }
  }
}

function BFS(N, M) {
  let result = 0;

  while (countOfIce !== 0) {
    initSetup(N, M);
    checkMap(N, M);
    result++;
  }

  return result;
}
