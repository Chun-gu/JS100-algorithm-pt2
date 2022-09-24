// # 문제82 : 수학 괄호 파싱

// 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

// **입출력 예시**

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 3 + 5
// True

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7) * (3 * 5)
// False

/**
 * 수식의 괄호들이 제대로 되어있는지 검증하는 함수
 * @param {string} expression 수식
 * @returns {boolean} 검증 결과
 */
function validateExpression(expression) {
  // 기호들의 배열로 변환
  const symbols = expression.split("");
  // 괄호의 개수를 이용해 검증에 사용할 변수
  let count = 0;

  // 기호들을 순회하면서
  symbols.forEach((symbol) => {
    // 여는 괄호면 count에 1을 더하고
    if (symbol === "(") count += 1;
    // 닫는 괄호면 count에 1을 뺀다.
    if (symbol === ")") count -= 1;
  });

  // count가 0이면 괄호들의 짝이 맞으므로 true, 아니라면 false이다.
  const validity = count === 0 ? true : false;

  return validity;
}

const expression = "5 + 7( * (3 * 5)";
const validity = validateExpression(expression);
console.log(validity);
