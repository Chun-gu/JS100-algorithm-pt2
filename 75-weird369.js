// # 문제75 : 이상한 369

// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

/**
 * 게임이 turn만큼 진행되었을 때까지의 박수의 총횟수를 반환하는 함수
 * @param {number} turn 회차
 * @returns {number} 박수의 총횟수
 */
function getClapCount(turn) {
  // 회차의 자릿수
  const digits = turn.toString().length;
  // 3, 6, 9로만 이뤄진 digits의 자리수의 배열을 만든다.
  const combinations = getCombinations(["3", "6", "9"], digits);
  // 목표로 하는 회차가 3, 6, 9로만 이뤄진 수를 최초로 넘어서게 됐을 때의 index를 구한다.
  const index = combinations.findIndex((combination) => +combination >= turn);
  // index에 이전 자릿수까지 이뤄진 박수의 총횟수를 더한다.
  const clapCount = index + 1 + (3 * (Math.pow(3, digits - 1) - 1)) / 2;

  return clapCount;
}

/**
 * 주어진 배열의 값이 특정 자릿수를 차지하는 수들의 배열을 반환하는 함수
 * @param {Array<string>} array 배열
 * @param {number} digits 자릿수
 * @returns
 */
function getCombinations(array, digits = 1) {
  const combinations = [];

  if (digits === 0) return;
  if (digits === 1) return array;

  array.forEach((fixed) => {
    const subCombinations = getCombinations(array, digits - 1);
    const attached = subCombinations.map((combination) =>
      [fixed, ...combination].join("")
    );

    combinations.push(...attached);
  });

  return combinations;
}

const turn = 9999;
const clapCount = getClapCount(turn);
console.log(clapCount);
