// # 문제79 : 순회하는 리스트

// 다음의 값이 주어졌을 때
// l = [10, 20, 25, 27, 34, 35, 39]
// n번 순회를 결정합니다. 예를 들어 2번 순회하면
// l = [35, 39, 10, 20, 25, 27, 34]
// 여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

// 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

// 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
// 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
// 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

// 39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

// 입력
// 순회 횟수 n : 2

// 출력
// index : 6
// value : 39, 34

// 입력
// 순회 횟수 n : 3

// 출력
// index : 5
// value : 35, 25

/**
 *
 * @param {Array<number>} array 숫자들의 배열
 * @param {number} n 순회할 횟수
 * @returns 순회 전과 후의 차가 제일 큰 수의 index와 그 값들
 */
function getIndexAndValues(array, n) {
  // array.length를 자주 사용하므로 변수로 할당한다.
  const arrayLength = array.length;
  // 인자로 받은 배열을 원본 배열로 지정한다.
  const originArray = array;
  // 순회 대상 배열에 원본 배열을 복사한 배열을 할당해놓는다.
  let rotatedArray = [...array];
  // 순회횟수가 배열의 길이를 넘어가면 넘어간 만큼은 순회할 필요가 없다.
  let rotatingCount = n % arrayLength;

  // 순회 대상 배열의 뒤에서부터 순회횟수만큼 숫자를 빼서 역순으로 만든다.
  const lastElements = rotatedArray
    .slice(arrayLength - rotatingCount)
    .reverse();
  // 순회 대상 배열에서 앞으로 보낼 숫자를 제거하고
  rotatedArray
    .splice(arrayLength - rotatingCount)
    .reverse()
    .push(...lastElements)
    .reverse();

  // 원본 배열과 순회할 배열의 차(절대값)으로 배열을 만든다.
  const diffs = originArray.map((element, i) =>
    Math.abs(element - rotatedArray[i])
  );

  // 두 배열의 차 중 최솟값을 구한다.
  const smallestDiff = Math.min(...diffs);
  // 최솟값의 index를 구한다.
  const index = diffs.findIndex((diff) => diff === smallestDiff);

  return { index, value: [originArray[index], rotatedArray[index]] };
}

const l = [35, 39, 10, 20, 25, 27, 34];
const n = 2;

const { index, value } = getIndexAndValues(l, n);

console.log(`index: ${index}
value: ${value}`);
