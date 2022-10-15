// # 문제100 : 퍼즐게임

// N x M으로 이루어진 아래와 같은 공간에 퍼즐이 쌓여져 있습니다.

// 퍼즐을 맞추기 위해서는 반드시 맨 오른쪽 줄로 이동시켜 줘야 합니다.
// 만약 종류가 같은 퍼즐이 연속될 시에 점수가 추가되며 그 퍼즐은 사라집니다.

// 점수는 다음과 같습니다.
// - 파란색 공 : 1점
// - 빨간색 공 : 2점
// - 노란색 공 : 3점
// - 초록색 공 : 4점
// - 주황색 공 : 5점
// 점수는 공의 개수만큼 추가됩니다
// 예를 들어 빨간색 공이 2개 연속되어 없어졌을 경우 2*2 = 4점입니다.

// 게임 플레이어는 게임이 시작되면 어떤 퍼즐을 이동할 것인지 모두 작성합니다.
// 만약 비어있는 곳을 선택하게 된다면 점수가 1점 감소하며 그대로 진행합니다.
// 위 규칙에 맞는 점수를 리턴하는 함수를 작성하세요.

// 예를 들어 입력이 "1 1 1 1 3 3 3"일 경우, 총 점수는 2점으로 2를 출력해야 합니다.

// 입력
// 퍼즐판 = [[0,0,0,0],[0,1,0,3],[2,5,0,1],[2,4,4,1],[5,1,1,1]]
// 조작 = [1,1,1,1,3,3,3]

// 출력
// 2

/**
 * 주어진 배열에서 0을 제거하고 같은 열의 값들을 행으로 묶어 반환하는 함수
 * @param {number[][]} board 이차원 배열
 * @returns {number[][]} 이차원 배열
 */
function refineBoard(board) {
  const refinedBoard = [];
  // 행과 열의 길이를 구해놓는다.
  const rowLength = board.length;
  const colLength = board[0].length;

  // 열을 좌에서 우로,
  for (let col = 0; col < colLength; col++) {
    const temp = [];
    // 행을 아래에서 위로 순회하면서
    for (let row = rowLength - 1; row >= 0; row--) {
      // 해당 위치의 값이 0이라면 다음 값들도 0이므로 해당 행의 탐색을 끝낸다.
      if (board[row][col] === 0) break;
      // 0이 아니라면 임시 배열에 넣고
      temp.push(board[row][col]);
    }
    // 임시 배열을 정제된 보드 배열에 넣는다.
    refinedBoard.push(temp);
  }

  return refinedBoard;
}

/**
 * 주어진 퍼즐판을 조작에 따라 진행해서 나온 점수를 반환하는 함수
 * @param {number[][]} board 퍼즐판
 * @param {number[]} moves 조작
 * @returns {number} 점수
 */
function play(board, moves) {
  // 주어진 퍼즐판에서 0을 제거하고
  // 같은 열의 값들이 행으로 묶인 정제된 퍼즐판으로 만든다.
  const refinedBoard = refineBoard(board);
  // 퍼즐판에서 집은 퍼즐들을 쌓아둘 스택을 만든다.
  const stack = [];
  // 점수를 0으로 초기화한다.
  let score = 0;

  // 움직임을 하나씩 순회하면서
  for (const move of moves) {
    // 움직임에 해당하는 행을 찾고
    const targetRow = refinedBoard[move - 1];
    // 해당 행이 비어있으면
    if (targetRow.length === 0) {
      // 점수에서 1을 감소시키고 다음 움직임을 시행한다.
      score -= 1;
      continue;
    }

    // 비어있는 행이 아니라면 마지막 퍼즐을 하나 선택해서
    const targetPuzzle = targetRow.pop();
    // 스택의 마지막 퍼즐과 집은 퍼즐이 일치한다면
    if (stack.at(-1) === targetPuzzle) {
      // 퍼즐의 2배를 점수로 추가하고
      score += targetPuzzle * 2;
      // 스택에서 해당 퍼즐을 제거한다.
      stack.pop();
    } else {
      // 일치하지 않는다면 퍼즐을 스택에 넣는다.
      stack.push(targetPuzzle);
    }
  }

  return score;
}

const board = [
  [0, 0, 0, 0],
  [0, 1, 0, 3],
  [2, 5, 0, 1],
  [2, 4, 4, 1],
  [5, 1, 1, 1],
];
const moves = [1, 1, 1, 1, 3, 3, 3];

const result = play(board, moves);
console.log(result);
