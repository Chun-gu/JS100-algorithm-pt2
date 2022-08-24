// 문제 53 : 괄호 문자열

// 괄호 문자열이란 괄호 기호인 "{", "}", "[", "]", "(", ")" 와 같은 것을 말한다.
// 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자.

// "(())"와 같은 문자열은 바른 문자열이지만 "()())"와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만, 중괄호와 대괄호까지 판별해 보세요.)

// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.

const string = "[{()}]";

function validateBrackets(string) {
  // 입력된 string을 배열로 만든다.
  const brackets = string.split("");
  // 여는 괄호에 대응하는 닫는 괄호를 저장할 배열을 선언한다.
  const expectedBrackets = [];

  // 빈배열이 들어왔다면 "FALSE" 반환하고 종료한다.
  if (brackets.length === 0) return "FALSE";

  // 입력받은 배열의 순회를 시작한다.
  for (const bracket of brackets) {
    // 각 여는 괄호마다 닫는 괄호가 있어야 하므로 여는 괄호에 대응되는 닫는 괄호를 배열에 추가한다.
    if (bracket === "(") {
      expectedBrackets.push(")");
    } else if (bracket === "{") {
      expectedBrackets.push("}");
    } else if (bracket === "[") {
      expectedBrackets.push("]");
      // 여는 괄호가 아닐 경우, 기대한 닫는 괄호 배열의 마지막 요소와 일치하는지 확인해서
    } else if (bracket === expectedBrackets.at(-1)) {
      // 일치한다면 해당 마지막 요소를 제거한다.
      expectedBrackets.pop();
    }
    // 일치하지 않는다면 'FALSE'를 반환한다.
    else return "FALSE";
  }

  // 순회를 무사히 마쳤다면 "TRUE"를 반환한다.
  return "TRUE";
}

const result = validateBrackets(string);
console.log("결과", result);
