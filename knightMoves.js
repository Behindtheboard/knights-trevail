const knightRules = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

const knightNextMove = (square, boardSize) => {
  return knightRules
    .map((el) => {
      const newCol = square[0] + el[0];
      const newRow = square[1] + el[1];
      if (
        newCol >= 0 &&
        newCol < boardSize &&
        newRow >= 0 &&
        newRow < boardSize
      ) {
        return [newCol, newRow];
      } else return null;
    })
    .filter((el) => el !== null);
};

const nextMoveList = (boardSize) => {
  const dictionary = new Map();
  for (let col = 0; col < boardSize; col++) {
    for (let row = 0; row < boardSize; row++) {
      dictionary.set(`${[col, row]}`, knightNextMove([col, row], 8));
    }
  }
  return dictionary;
};

const knightMove = (start, end) => {
  const visited = new Map();
  const queue = [[start]];
  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];
    if (!visited.has(`${current}`)) {
      visited.set(`${current}`);
      if (`${current}` === `${end}`) {
        return path;
      }
      const edgelist = nextMoves.get(`${current}`);
      for (const edge of edgelist) {
        queue.push([...path, edge]);
      }
    }
  }
};

const nextMoves = nextMoveList(8);

console.log(knightMove([0, 0], [7, 7]));
