// function numIslands(grid: string[][]): number {
//   let numIslands = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === "1") {
//         bfs(i, j, grid);
//         numIslands++;
//       }
//     }
//   }
//   return numIslands;
// }

// function bfs(i: number, j: number, grid: string[][]): void {
//   let queue = [[i, j]];
//   while (queue.length !== 0) {
//     let [x, y] = queue.shift();
//     grid[x][y] = "0";

//     for (const [dx, dy] of directions) {
//       if (isLand(x + dx, y + dy, grid)) {
//         queue.push([x + dx, y + dy]);
//       }
//     }
//   }
// }

// function isLand(i: number, j: number, grid: string[][]): boolean {
//   return (
//     i >= 0 &&
//     i < grid.length &&
//     j >= 0 &&
//     j < grid[0].length &&
//     grid[i][j] === "1"
//   );
// }

// const directions = [
//   [-1, 0],
//   [0, 1],
//   [1, 0],
//   [0, -1],
// ];

function numIslands(grid: string[][]): number {
  let numIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j, grid);
        numIslands++;
      }
    }
  }
  return numIslands;
}

function bfs(i: number, j: number, grid: string[][]) {
  const queue = [[i, j]];
  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    if (x < 0 || y < 0 || x === grid.length || y === grid[0].length) {
      continue;
    }

    if (grid[x][y] !== "1") {
      continue;
    }

    grid[x][y] = "X";

    queue.push([x + 1, y]);
    queue.push([x - 1, y]);
    queue.push([x, y + 1]);
    queue.push([x, y - 1]);
  }
}
