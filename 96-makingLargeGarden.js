// # 문제96 : 넓은 텃밭 만들기!

// 수연이는 밭농사를 시작하기로 마음을 먹었다. 집 앞 텃밭을 만들기로 하고 돌들을 제거하고 있는데 매우 큰 바위는 옮기지 못해 고심하고 있다.

// 이에 수연이는 다음과 같은 규칙을 정한다.

// 1. 바위를(바위는 '1'로 표기한다.) 피해 텃밭을 만들되 정사각형 모양으로 텃밭을 만든다.
// 2. 텃밭은 가장 넓은 텃밭 1개만 만들고 그 크기를 반환한다.
// 3. 만든 텃밭은 모두 '#'으로 처리한다.

// 입력

// 0 0 0 0 0
// 0 1 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0

// 출력

// 3 X 3

// 0 0 # # #
// 0 1 # # #
// 0 1 # # #
// 0 0 1 0 0
// 0 0 0 1 0

// 입력

// 0 0 0 1 0
// 0 0 0 0 0
// 0 0 1 0 0
// 0 0 1 0 0
// 0 0 0 1 0

// 출력

// 2 X 2

// # # 0 1 0
// # # 0 0 0
// 1 0 1 0 0
// 0 0 1 0 0
// 1 0 0 1 0

/**
 * 주어진 땅에서 최대 크기의 텃밭을 만들어 반환하는 함수
 * @param {string} land 땅
 */
function makeGarden(land) {
  // 입력값을 이차원 배열로 변환
  const landArray = land.split("\n").map((row) => row.split(" ").map(Number));
  // 1과 0을 바꿔서 이차원 배열로 변환
  const transposedLand = land
    .replaceAll(1, "*")
    .replaceAll(0, 1)
    .replaceAll("*", 0)
    .split("\n")
    .map((row) => row.split(" ").map(Number));

  // 좌, 상, 좌상의 값을 탐색해나간다.
  // let leftValue = 0;
  // let upValue = 0;
  // let upperLeftValue = 0;

  // 최댓값과 그 위치를 선언해놓는다.
  let maxValue = 0;
  let maxValuePosition = [0, 0];

  // 이차원 배열의 각 값을 탐색해나가면서
  for (let i = 1; i < transposedLand.length; i++) {
    for (let j = 1; j < transposedLand[0].length; j++) {
      // 현재값이 0이라면 다음 값을 탐색한다.
      let currentValue = transposedLand[i][j];
      if (currentValue === 0) continue;

      // 현재값의 좌, 상, 좌상의 값들 중
      let leftValue = transposedLand[i][j - 1];
      let upValue = transposedLand[i - 1][j];
      let upperLeftValue = transposedLand[i - 1][j - 1];
      // 제일 작은 값에 1을 더한 값으로 현재 위치의 값을 변경한다.
      let minValue = Math.min(leftValue, upValue, upperLeftValue);
      transposedLand[i][j] = minValue + 1;

      // 최댓값이 현재 위치의 값보다 작다면
      if (maxValue < transposedLand[i][j]) {
        // 최댓값을 현재 위치의 값으로 변경하고,
        // 최댓값의 좌표를 현재 위치의 좌표로 변경한다.
        maxValue = transposedLand[i][j];
        maxValuePosition = [i, j];
      }
    }
  }

  // 원본 이차원 배열과 최댓값, 최댓값의 위치를 이용해 제일 큰 정사각형의 면적에 #을 찍는다.
  const markedGarden = markGarden(landArray, maxValuePosition, maxValue);

  return markedGarden;
}

/**
 * endPoint에서 좌상단 방향으로 sideLength만큼의 너비, 높이를 갖는 땅을 표시하는 함수
 * @param {number[][]} land 땅
 * @param {number[]} endPoint 끝점
 * @param {number} sideLength 텃밭의 한 변의 길이
 * @returns {Array<number|string>}
 */
function markGarden(land, endPoint, sideLength) {
  // 이차원 배열을 깊은 복사한다.
  const garden = JSON.parse(JSON.stringify(land));
  // 끝점과 변의 길이를 이용해 시작점을 구한다.
  const x = endPoint[0] - sideLength + 1;
  const y = endPoint[1] - sideLength + 1;

  // 시작점에서부터 우하단으로 sideLength만큼 진행하며 #로 바꾼다.
  for (let i = x; i < x + sideLength; i++) {
    for (let j = y; j < y + sideLength; j++) {
      garden[i][j] = "#";
    }
  }

  return garden;
}

const land = `1 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 1 0`;
const garden = makeGarden(land);
console.log("결과", garden);
