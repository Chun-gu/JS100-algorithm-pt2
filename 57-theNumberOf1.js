// 문제57 : 1의 개수

// 0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다.
// 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

// 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.

/**
 * 지정된 범위의 수에서 특정 숫자의 개수를 반환하는 함수
 * ex) countTheNumber(0, 1000, 1) : 0 ~ 1000까지의 수에서 1의 개수를 세서 반환
 * @param {number} from 특정 숫자를 셀 범위의 시작 숫자
 * @param {number} to 특정 숫자를 셀 범위의 마지막 숫자
 * @param {number} targetNumber 몇 개인지 셀 숫자
 * @returns 특정 숫자의 개수를 반환
 */

function countTheNumber(from, to, targetNumber) {
  // 일렬로 나열해서 하나의 문자열로 만들어 주기 위해 빈문자열을 만들어둔다.
  let string = "";

  // from에서 to까지의 수를 하나의 문자열로 붙인다.
  for (let i = from; i <= to; i++) string += i;

  // 셀 targetNumber의 개수를 0으로 초기화한다.
  let count = 0;

  // 문자열을 하나씩 순회하며
  for (let str of string) {
    // 현재 순회 중인 문자열이 targetNumber와 일치하면 count를 1씩 증가시킨다.
    if (str == targetNumber) count++;
  }

  return count;
}

const result = countTheNumber(0, 1000, 1);
console.log(result);
