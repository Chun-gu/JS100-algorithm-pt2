// 문제58 : 콤마 찍기

// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

// 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

const number = 123456789;

/**
 * 숫자를 받아 천 단위에 콤마를 찍어서 반환하는 함수
 * @param {number} number 콤마가 찍혀야 하는 숫자
 * @returns 천 단위에 콤마를 찍은 숫자를 문자열로 반환
 */
function markComma(number) {
  // toLacaleString은 숫자를 지정된 locale 혹은 현재 locale에 따른 문자열로 변형해서 반환한다.
  return number.toLocaleString();
}

const result = markComma(number);
console.log(result);
