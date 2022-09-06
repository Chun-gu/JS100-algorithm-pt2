// 문제66 : 블럭탑쌓기

// 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
// 순서에 맞게 쌓지 않으면 무너질 수 있습니다.

// 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
// 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

// - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
// - B 다음 블럭이 C가 될 수 있습니다.

// 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

// 1. 블럭은 알파벳 대문자로 표기합니다.
// 2. 규칙에 없는 블럭이 사용될 수 있습니다.
// 3. 중복된 블럭은 존재하지 않습니다.

// 입력
// 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
// 규칙 = "ABD"

// 출력
// ["가능", "불가능", "가능", "가능", "가능"]

/**
 * 주어진 규칙 하에 타워가 존재할 수 있는지 여부를 반환하는 함수
 * @param {Array<string>} towers 타워들의 배열
 * @param {string} rule 규칙
 * @returns 타워의 존재 가능 여부를 담은 배열
 */
function checkPossibility(towers, rule) {
  // 규칙을 배열로 만든다.
  // [ 'A', 'B', 'D' ]
  const ruleBlocks = rule.split("");
  // 규칙에 들어있는 블록들로 조합할 수 있는 경우의 수 배열을 만든다.
  // [ '', 'A', 'B', 'D', 'AB', 'AD', 'BD', 'ABD' ]
  const ruleCases = makeRuleCases(ruleBlocks);

  // 타워에서 규칙에 존재하는 블록들만 남기고 없앤 배열을 만든다.
  // [ 'ABD', 'BAD', 'AD', 'BD', '' ]
  const shortenedTowers = towers.map((tower) =>
    filterMatchBlocks(tower, ruleBlocks)
  );

  // 축약된 타워가 규칙 케이스 배열에 존재하면 가능 아니면 불가능
  const result = shortenedTowers.map((tower) =>
    ruleCases.includes(tower) ? "가능" : "불가능"
  );

  return result;
}

/**
 * 타워를 이루고 있는 블록들 중 규칙에 존재하는 블록들만 추출해서 반환하는 함수
 * @param {string} tower 타워
 * @param {Array<string>} ruleBlocks 규칙 블록의 배열
 * @returns {string} 규칙에 존재하는 블록들만 추출한 문자열
 */
function filterMatchBlocks(tower, ruleBlocks) {
  // 타워를 블록들의 배열로 만든다.
  const blocks = tower.split("");
  // 타워를 구성하는 블록들 중 규칙 블록의 배열에 존재하는 것들만 남긴다.
  const matchingBlocks = blocks
    .filter((block) => ruleBlocks.includes(block))
    .join("");

  return matchingBlocks;
}

/**
 * 규칙을 기반으로 가능한 규칙들의 목록을 반환하는 함수
 * @param {string[]} ruleBlocks 규칙 블록의 배열
 * @returns {Array<string>} 규칙 목록
 */
function makeRuleCases(ruleBlocks) {
  const ruleCases = [];

  // 규칙 블록들의 가능한 모든 조합을 만들어서 규칙 케이스 목록에 넣는다.
  for (let i = 0; i <= ruleBlocks.length; i++) {
    const ruleCase = getCombinations(ruleBlocks, i);
    ruleCases.push(...ruleCase);
  }

  return ruleCases;
}

/**
 * 주어진 배열에서 특정한 개수의 조합(nCr)을 만드는 함수
 * @param {Array<string>} array 조합할 요소들의 배열
 * @param {number} selectNumber 선택할 개수
 * @returns {Array<string>}
 */
function getCombinations(array, selectNumber) {
  // 조합들을 담을 배열을 만든다.
  const combinations = [];
  // 0개의 조합이면 빈문자열의 배열을 반환한다.
  if (selectNumber === 0) return [""];
  // 1개의 조합이면 배열을 그대로 반환한다.
  if (selectNumber === 1) return array;

  // 2개 이상을 골라서 하는 조합이면 배열을 돌면서 조합을 만든다.
  array.forEach((fixed, index, origin) => {
    // 현재 고정 요소를 제외한 나머지 요소들을 배열로 만든다.
    const rest = origin.slice(index + 1);
    // 나머지 요소들의 조합을 구한다.
    const restCombinations = getCombinations(rest, selectNumber - 1);
    // 고정 요소의 뒤에 조합된 나머지 요소들을 붙인다.
    const attached = restCombinations.map((combination) =>
      [fixed, ...combination].join("")
    );

    //
    combinations.push(...attached);
  });

  return combinations;
}

const towers = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

const result = checkPossibility(towers, rule);
console.log(result);
