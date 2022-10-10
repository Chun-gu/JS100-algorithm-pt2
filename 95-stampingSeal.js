// # 문제95 : 도장찍기

// 빈 종이에 stamp 모양으로 생긴 도장을 90*k 도로 회전하며 찍습니다. 도장은 N*N 크기이며 각 도장이 찍히는 부분은 1 이상의 자연수와 도장이 찍히지 않는 부분은 0으로 이루어져 있습니다.

// 도장의 크기 N과,
// 종이에 찍힌 도장 횟수를 표현한 stmp 배열과,
// 얼마만큼 회전할 것인지를 알려주는 회전수 k를 입력받았을 때 각 위치에서 몇 번 도장이 찍혔는지 그 결과값을 출력하세요.

// 입력

// 도장 = [
// [1,1,1,2],
// [2,0,0,0],
// [1,1,1,1],
// [0,0,0,0]]

// 회전 = 1

// 출력

// [[1, 2, 3, 3], [2, 1, 0, 1], [1, 2, 1, 2], [0, 1, 0, 2]]

/**
 * 기존 도장에 회전시킨 도장을 찍어 더해진 수를 반환하는 함수
 * @param {number[][]} seal 도장
 * @param {number} k 도장 회전 수
 * @returns {number[][]} 기존 도장을 찍은 곳에 회전시킨 도장을 찍은 결과
 */
function stampSeal(seal, k) {
  // 4바퀴를 돌면 원점이므로 4로 나눈 나머지만큼만 계산하면 된다.
  const rotationCount = k % 4;
  // 정해진 횟수만큼 돌려진 도장을 만든다.
  const rotatedSeal = rotateSeal(seal, rotationCount);
  // 도장의 한 변의 길이
  const sideLength = seal.length;

  // 회전 전과 후의 도장의 각 위치의 값을 더한다.
  for (let i = 0; i < sideLength; i++) {
    for (let j = 0; j < sideLength; j++) {
      seal[i][j] += rotatedSeal[i][j];
    }
  }

  // 값이 더해진 도장을 반환한다.
  return seal;
}

/**
 * 지정된 수만큼 회전시킨 도장을 반환하는 함수
 * @param {number[][]} seal 회전시킬 도장
 * @param {number} rotationCount 회전 수
 * @returns {number[][]} 회전시킨 도장
 */
function rotateSeal(seal, rotationCount) {
  // 회전 수가 0이라면 도장 그대로 반환한다.
  if (rotationCount === 0) return seal;

  // 도장의 한 변의 길이
  const sideLength = seal.length;
  // 주어진 회전수에 도달하기 전인 임시 도장을 만든다.
  const tempSeal = [];

  for (let i = 0; i < sideLength; i++) {
    let row = [];
    for (let j = sideLength; j > 0; j--) {
      // 30 20 10 00의 값을 00 01 02 03의 위치에
      // 31 21 11 01의 값을 10 11 12 13의 위치에
      // 32 22 12 02의 값을 20 21 22 23의 위치에
      // 33 23 13 03의 값을 30 31 32 33의 위치에 넣는다.
      row.push(seal[j - 1][i]);
    }
    tempSeal.push(row);
  }
  // 회전 수를 한 번 줄인 도장을 재귀적으로 돌린다.
  const rotatedSeal = rotateSeal(tempSeal, rotationCount - 1);

  return rotatedSeal;
}

const seal = [
  [1, 1, 1, 2],
  [2, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];
const k = 1;
const stampedSeal = stampSeal(seal, k);
console.log(stampedSeal);
