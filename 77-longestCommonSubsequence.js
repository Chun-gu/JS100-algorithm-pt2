// # 문제77 : 가장 긴 공통 부분 문자열

// **가장 긴 공통 부분 문자열(Longest Common Subsequence)**이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

// 예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

// 이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.

// 두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

// 출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

// - Test Case -

// 입력
// THISISSTRINGS
// THISIS

// 출력
// 6

// 입력
// THISISSTRINGS
// TATHISISKKQQAEW

// 출력
// 6

// 입력
// THISISSTRINGS
// KIOTHIKESSISKKQQAEW

// 출력
// 3

// 입력
// THISISSTRINGS
// TKHKIKSIS

// 출력
// 3

/**
 * 가장 긴 공통 부분 문자열을 반환하는 함수
 * @param {string} input 줄바꿈으로 구분된 문자열
 * @returns {string} 가장 긴 공통 부분 문자열
 */
function getLongestCommonSubsequence(input) {
  // input을 줄바꿈을 기준으로 둘로 나눠서 각각 할당합니다.
  const [firstString, secondString] = input.split("\n");
  // 각각의 문자열로 부분열의 배열을 만듭니다.
  const firstSubsequences = getSubsequences(firstString);
  const secondSubsequences = getSubsequences(secondString);

  // 두 부분열의 공통 부분 문자열의 배열을 만듭니다.
  const commonSubsequences = firstSubsequences.filter((subsequences) =>
    secondSubsequences.includes(subsequences)
  );

  // 공통 부분 문자열을 각 문자열의 길이를 기준으로 오름차순 정렬합니다.
  const sorted = commonSubsequences.sort((a, b) => a.length - b.length);
  // 길이가 제일 긴 공통 부분 문자열을 반환합니다.
  const longestCommonSubsequence = sorted.pop();

  return longestCommonSubsequence;
}

/**
 * 특정 문자열의 부분열들의 배열을 반환하는 함수
 * @param {string} sequence 문자열
 * @returns {Array<string>}부분열들의 배열
 */
function getSubsequences(sequence) {
  // 부분열을 저장할 배열을 만듭니다.
  const subsequences = [];
  // 인자로 들어온 문자열을 배열로 만듭니다.
  const strings = sequence.split("");

  // 이중 for문으로 부분열을 만들어 배열에 저장합니다..
  for (let i = 0; i <= sequence.length; i++) {
    for (let j = i + 1; j <= sequence.length; j++) {
      subsequences.push(strings.slice(i, j).join(""));
    }
  }

  // 부분열의 배열을 반환합니다.
  return subsequences;
}

const input = `THISISSTRINGS
TKHKIKSIS`;

const longestCommonSubsequenceLength =
  getLongestCommonSubsequence(input).length;
console.log(longestCommonSubsequenceLength);
