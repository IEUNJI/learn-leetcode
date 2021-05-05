/**
 * 回溯算法
 *
 */

function backTracking(
  maze, // 迷宫（二维数组） 0 可走 1 不可走 2 终点
  pos = [0, 0], // 起点
  path = [], // 最终通关路径
  transverse = [] // 记录走过的点
) {
  const [x, y] = pos;
  if (maze[x][y] === 2) { // 到达终点
    return path;
  }
  // 记录走过的位置
  transverse[x * maze.length + y] = 1;
  const choices = [ // 上下左右可选的点
    [x + 1, y], [x - 1, y],
    [x, y + 1], [x, y - 1]
  ].filter(([x, y]) => {
    return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length && // 边界
      maze[x][y] !== 1 && !transverse[x * maze.length + y]; // 不为墙且没走过
  });
  for (let [x, y] of choices) {
    const p = backTracking(maze, [x, y], path.concat([[x, y]]), transverse);
    if (p) { // 死胡同了就没有choices了，也就没返回值了
      return p;
    }
  }
}

const maze = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1],
  [2, 1, 0, 0, 0, 0]
];

console.log(backTracking(maze));
