// # 문제83 : 수학 괄호 파싱 2

// 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
// 괄호는 소괄호와 중괄호가 있습니다.

// **입출력 예시**
// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7 * {(3 * 5)}
// True

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7){ * (3 * 5)
// False

// 데이터 입력(1), 프로그램 종료(2) : 2

/**
 * 수식의 소괄호, 중괄호들이 제대로 되어있는지 검증하는 함수
 * @param {string} expression
 * @returns {boolean} 검증 결과
 */
function validateExpression(expression) {
  // 여는 괄호에 대응하는 닫는 괄호를 연결해놓은 객체를 만든다.
  const braketMap = {
    "(": ")",
    "{": "}",
  };
  // bracketMap의 value만 담은 배열을 만든다.
  const bracketValues = Object.values(braketMap);

  // 수식을 나눠서 기호들의 배열로 만든다.
  const symbols = expression.split("");

  // 닫는 괄호들을 넣어둘 배열을 만든다.
  const closingBrackets = [];

  // 기호들을 순회하면서
  for (const symbol of symbols) {
    // 현재 기호에 대응하는 닫는 괄호가 있으면 해당 괄호가 담기고,
    // 없으면 undefined가 담긴다.
    const closingBracket = braketMap[symbol];

    // 닫는 괄호가 있으면
    if (closingBracket) {
      // 닫는 괄호를 배열에 넣는다.
      closingBrackets.push(closingBracket);
      // 현재 기호가 닫는 괄호이고
    } else if (bracketValues.includes(symbol)) {
      // 닫는 괄호 배열의 마지막 요소가 현재 기호와 일치한다면
      if (closingBrackets.at(-1) === symbol) {
        // 닫는 괄호에서 해당 요소를 제거한다.
        closingBrackets.pop();
      }

      // 일치하지 않으면 오지 말아야 할 기호가 온 것이므로
      // false를 반환한다.
      else return false;
    }
  }

  // 순회를 마친 뒤에 닫는 괄호에 요소가 남아있으면 false를 반환한다
  return closingBrackets.length === 0 ? true : false;
}

const expression = ")((5 + 7) * {}{}(3 * 5)";
const validity = validateExpression(expression);
console.log(validity);
