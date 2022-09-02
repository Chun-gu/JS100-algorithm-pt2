// 문제 61 : 문자열 압축하기

// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// 입력
// aaabbbbcdddd

// 출력
// a3b4c1d4

/**
 * 문자열을 입력받고 연속되는 문자열을 압축해서 반환하는 함수
 * ex) aabbbbcdddd => a3b4c1d4
 * @param {string} string 압축할 문자열
 * @returns {string} 압축된 문자열
 */
function compressString(string) {
  // 문자열과 그 개수를 기록할 객체를 선언한다.
  const object = {};
  // 문자열을 순회하면서
  for (const str of string) {
    // 객체에 문자열을 key로 하는 속성이 없으면 value로 1을 줘서 추가하고,
    // 이미 있으면 value값에 1을 더한다.
    object[str] ? (object[str] += 1) : (object[str] = 1);
  }

  // 반환할 문자열을 선언한다.
  let result = "";
  // 객체를 iterable하게 만들고 순회하며
  for (const [string, count] of Object.entries(object)) {
    // result에 문자열과 그 개수를 붙인다.
    result += `${string}${count}`;
  }

  return result;
}

const input = "aaabbbbcdddd";
const result = compressString(input);
console.log(result);
