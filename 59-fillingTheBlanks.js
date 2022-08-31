// 문제59 : 빈칸채우기

// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

// 입력
// hi

// 출력
// ========================hi========================

/**
 * @param {number} totalLength 반환할 문자열의 총길이
 * @param {string} word 가운데에 위치시킬 단어
 * @param {string} filler 주어진 단어가 차지하고 남은 자리에 채울 문자열
 * @returns length의 길이를 가지는 문자열 반환
 */
function fillTheBlanks(totalLength, word, filler) {
  // 주어진 단어의 길이
  const wordLength = word.length;

  // 출력해야 할 문자열의 총길이가 단어의 길이보다 짧다면 에러 메시지 반환하고,
  if (totalLength < wordLength) {
    return "출력할 문자열의 총길이가 주어진 단어의 길이보다 짧습니다.";
    // 같다면 단어만 반환한다
  } else if (totalLength === wordLength) {
    return word;
  }

  // 총길이에서 단어의 길이를 뺀 나머지 길이를 구한다.
  const remainingLength = totalLength - wordLength;
  // 나머지 길이를 2로 나눠서 홀짝 판별한다.
  const isOdd = !!(remainingLength % 2);

  // 짝수이면 단어의 좌우에 넣을 문자열의 길이를 동일하게 주고,
  // 홀수라면 왼쪽엔 소수점 이하를 절사한 길이, 오른쪽엔 왼쪽보다 1 길게 준다.
  let leftLength = isOdd ? Math.floor(remainingLength / 2) : remainingLength;
  let rightLength = isOdd ? leftLength + 1 : leftLength;

  // 주어진 길이만큼 filler로 채워진 좌우 배열을 만든다.
  const leftFiller = new Array(leftLength).fill(filler);
  const rightFiller = new Array(rightLength).fill(filler);
  // 적절한 위치에 배치한 배열을 만들고 join해서 문자열로 변환한다.
  const result = [...leftFiller, word, ...rightFiller].join("");

  return result;
}

const result = fillTheBlanks(50, "hi", "=");
console.log(result);
