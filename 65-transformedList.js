// 문제65 : 변형된 리스트

// a = [1, 2, 3, 4];
// b = [a, b, c, d];
// 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]]
// 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

/**
 * 배열을 합쳐서 반환하는 함수
 * @param {Array<any>} a 합칠 배열
 * @param {Array<any>} b 합칠 배열
 * @returns {number} 합쳐진 배열
 */
function transformList(a, b) {
  const result = a.map((element, index) => {
    // 인덱스가 짝수라면
    if (index % 2 === 0) {
      // a의 요소가 앞으로 오는 배열을 반환하고,
      return [element, b[index]];
    } else {
      // 아니라면 b의 요소가 앞으로 오는 배열을 반환한다.
      return [b[index], element];
    }
  });

  return result;
}

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

const result = transformList(a, b);
console.log(result);
