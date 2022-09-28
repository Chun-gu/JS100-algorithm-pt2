// # 문제85 : 숫자놀이

// 일정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
// 이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.
// 이 놀이는 1부터 시작합니다.
// 다음 수는 1이 1개이기 때문에 '11'이 되고,
//  '11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.

// 즉,
// 1. 1  → (1)
// 2. 11 → (1이 1개)
// 3. 12 → (1이 2개)
// 4. 1121 → (1이 1개 2가 1개)
// 5. 1321 → (1이 3개 2가 1개)
// 6. 122131 → (1이 2개 2가 1개 3이 1개)
// 7. 132231 → (1이 3개 2가 2개 3이 1개)

// 위와 같이 진행되는 규칙을 통해 진행 횟수 N을 입력받으면 해당되는 수를 출력하세요.

// 입력
// 6

// 출력
// 122131

/**
 * 게임을 횟수 count만큼 진행한 뒤의 결과를 반환하는 함수
 * @param {number} count 게임 진행 횟수
 * @returns {number} 게임 결과
 */
function playNumber(count) {
  // 결과에 1이라는 문자열을 미리 할당한다.
  let result = "1";

  // count가 1보다 큰 동안
  while (count > 1) {
    // result를 배열로 만들어 reduce로 순회하며
    let numberMap = result.split("").reduce((obj, num) => {
      // 객체에 key가 num인 속성의 value가 없으면 1을 할당하고, 있으면 1을 더한다.
      obj[num] = (obj[num] || 0) + 1;

      return obj;
    }, {});

    // numberMap이라는 객체를 [[key, value], ...] 형태의 이중배열로 만들고,
    // flat으로 depth를 줄인 뒤, join으로 문자열로 만든다.
    result = Object.entries(numberMap).flat().join("");

    // 순회를 1회 마쳤으므로 count에서 1을 뺀다.
    count -= 1;
  }

  // 문자열인 result를 숫자로 바꿔서 반환한다.
  return parseInt(result);
}

const count = 6;
const result = playNumber(count);
console.log(result);
