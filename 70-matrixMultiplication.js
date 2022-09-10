// # 문제70 : 행렬 곱하기

// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// 입력
// a = [[1, 2],
// 		[2, 4]]

// b = [[1, 0],
// 		[0, 3]]

// 출력
// [[1, 6], [2, 12]]

/**
 * 행렬의 곱을 반환하는 함수
 * @param {number[][]} a 첫번째 행렬
 * @param {number[][]} b 두번째 행렬
 * @returns {number[][]} 두 행렬을 곱한 결과
 */
function multiplyMatrix(a, b) {
  const result = [];
  // a의 열의 갯수와 b의 행의 갯수가 같으면 곱셈 가능
  if (a[0].length === b.length) {
    for (let i = 0; i < a.length; i++) {
      const row = [];
      for (let j = 0; j < b[0].length; j++) {
        let temp = 0;
        for (let k = 0; k < b.length; k++) {
          temp += a[i][k] * b[k][j];
        }
        row.push(temp);
      }
      result.push(row);
    }

    return result;
  } else return -1;
}

const a = [
  [1, 2, 3],
  [4, 5, 6],
];
const b = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const result = multiplyMatrix(a, b);
console.log(result);
