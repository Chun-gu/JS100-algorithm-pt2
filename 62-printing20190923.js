// 문제 62 : 20190923출력하기
// 20190923을 출력합니다.  아래 기준만 만족하면 됩니다.

// 1. 코드 내에 숫자가 없어야 합니다.
//  - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

// 방법 1
/**
 * 문자열의 알파벳을 아스키코드로 변환 및 가공하고 새로 조합하여 반환하는 함수
 * @param {string} string 알파벳이 조합된 문자열
 * @returns {string} 알파벳을 숫자로 변환한 문자열
 */
function useASCII(string) {
  // 반환할 문자열을 선언한다.
  let result = "";

  // 문자열을 순환하면서,
  for (const str of string) {
    // 알파벳을 아스키코드로 치환하고 맨 뒷자리를 result에 붙인다.
    result += str.charCodeAt().toString().at(-1);
  }

  return result;
}

const input1 = "HFGEFEHI";
const result1 = useASCII(input1);
console.log(result1);

// 방법 2
/**
 * 영단어를 숫자로 변환하여 반환하는 함수
 * @param {string} input 숫자에 해당하는 영단어로 조합된 문자열
 * @returns 영단어를 숫자로 치환한 문자열
 */
function useRegex(input) {
  // 숫자에 해당하는 영단어를 배열로 선언한다.
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numbers.forEach((_, index) => {
    // 영단어로 정규표현식을 만들고,
    const regex = new RegExp(numbers[index], "g");
    // 정규표현식에 해당하는 단어를 숫자로 치환한다
    input = input.replace(regex, index);
  });

  return input;
}

const input2 = "twozerooneninezeroninetwothree";
const result2 = useRegex(input2);
console.log(result2);
