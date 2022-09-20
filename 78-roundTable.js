// # 문제78 : 원형 테이블

// 기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
// 음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

// 기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
// 한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
// 하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

// **마지막으로 남는 음식은 어떤 접시인가요?**

// 입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
// 첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
// 첫 번째 가져가는 음식이 K 번째 음식이며 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

// 입력
// 6 3

// 남은 음식들의 번호를 배열의 형태로 출력합니다.

// 출력
// [3, 5]

/**
 * 남은 음식의 번호를 배열로 반환하는 함수
 * @param {string} input 음식의 개수와 다음 음식까지의 공백으로 구분된 문자열
 * @return 남은 음식의 번호
 */
function getRemainingDishes(input) {
  // 입력값에서 음식의 개수와 다음 음식을 간격을 분리해낸다.
  let [dishCount, interval] = input.split(" ").map(Number);
  // 음식의 개수만큼 번호가 매겨진 배열을 만든다.
  // ex) [1, 2, 3, 4, 5, 6]
  const dishes = [...new Array(dishCount)].map((_, i) => i + 1);

  // 배열의 index는 0부터 시작이므로 1을 빼준다.
  let index = interval - 1;
  // 음식의 개수가 2개보다 많이 남아있을 동안
  while (dishes.length > 2) {
    // 음식들에서 index번째 음식을 제거한다.
    dishes.splice(index, 1);
    // index를 간격만큼 증가시키는데 음식이 하나 줄었으니 1을 제거하고,
    // index가 음식 개수를 넘어가면 0으로 돌아와서 세야하므로,
    // 음식 개수로 나눈 나머지로 설정한다.
    index = (index + interval - 1) % dishes.length;
  }

  return dishes;
}

const input = "6 3";
const remainingDishes = getRemainingDishes(input);
console.log(remainingDishes);
