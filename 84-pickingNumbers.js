// # 문제84 : 숫자뽑기

// 소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다.
// 예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
// 이 중 가장 큰 수는 **73**입니다.

// 위 예시처럼 **어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수**를 찾아 주세요.

/**
 * 자연수 n에서 k개의 숫자를 뽑아 만든 조합 중 가장 큰 수를 반환하는 함수
 * @param {number} n 자연수
 * @param {number} digit 자연수 n에서 선택할 숫자의 개수
 * @returns {number} 조합 중 가장 큰 수
 */
function getBiggestCombination(n, digit) {
  // 숫자를 문자열로 만들어 배열로 분해하고 다시 숫자로 만든 뒤에 내림차순 정렬한다.
  const numbers = n.toString().split("").map(Number);
  // 배열을 이용해 조합을 구한다.
  const combinations = getCombinations(numbers, digit);
  // 조합이 담긴 배열에서 가장 큰 수를 구한다.
  const biggestCombination = Math.max(...combinations);

  return biggestCombination;
}

/**
 * 주어진 배열에서 digit만큼의 숫자를 선택해 만든 조합을 반환하는 함수
 * @param {Array<number>} array 숫자들의 배열
 * @param {number} digit 선택할 숫자의 개수
 * @returns {Array<number>} 조합들의 배열
 */
function getCombinations(array, digit) {
  // 조합을 담을 배열을 선언한다.
  const combinations = [];
  // 숫자를 하나 선택하는 거면 배열을 그대로 반환한다.
  if (digit === 1) return array;

  // 5개의 수 중 3개를 선택해서 조합을 만드는 거라면,
  // 앞에서 3번째 수까지만 순회하면 된다.
  for (let i = 0; i <= array.length - digit; i++) {
    // 배열의 첫번째 수를 고정한다.
    const fixed = array[i];
    // 나머지 수들을 새로운 배열로 만든다.
    const rest = array.slice(i + 1);
    // 나머지 수들로 조합을 구한다.
    const subCombinations = getCombinations(rest, digit - 1);
    // 나머지 수들로 구한 조합에 고정수를 붙이고 숫자로 변환한다.
    const attached = subCombinations.map((sub) => parseInt(`${fixed}${sub}`));
    // 고정수를 붙인 조합을 배열에 추가한다.
    combinations.push(...attached);
  }

  return combinations;
}

const n = 1723;
const k = 2;
const BiggestCombination = getBiggestCombination(n, k);
console.log(BiggestCombination);
