// 문제64 : 이상한 엘레베이터

// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
// 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
// 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

// 입력
// 정량 N이 입력됩니다.

// 출력
// 가장 적게 옮길 수 있는 횟수를 출력합니다.
// 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.

/**
 * 엘리베이터의 적재중량에 맞춰 화물을 옮기는 조건하에 가능한 최소 운반 횟수를 반환하는 함수
 * @param {number} N 엘리베이터가 움직일 수 있는 적재중량
 * @param {Array<number>} cargoWeights 화물들의 무게
 * @returns {number} 최소 운반 횟수
 */
function countTheLeastMovement(N, cargoWeights) {
  // 정량 N을 계속 수정할 것이므로 새로운 변수에 할당
  let loadingWeight = N;
  // 확인을 시작할 위치를 0으로 초기화
  let from = 0;
  // 화물을 무거운 순으로 정렬하고 각 화물당 운반횟수를 0으로 초기화한다.
  const weights = cargoWeights
    .sort((a, b) => b - a)
    .map((weight) => [weight, 0]);

  // 총 운반횟수
  let count = 0;

  while (count === 0) {
    // 확인 과정을 거치고 남은 무게를 반환받는다.
    const remainingWeight = check(from, weights, loadingWeight);

    // 남은 무게가 0이라면 성공한 것이므로
    if (remainingWeight === 0) {
      // 각 화물당 운반횟수를 모두 더해서 count에 할당한다.
      count = weights.reduce((acc, weight) => acc + weight[1], 0);
    }

    // 확인 시작 위치와 화물들의 무게를 조정한다
    const { newFrom, newExceptedWeight } = adjust(from, weights);

    // 제외할 무게가 0이라면 정량이 되는 경우가 없다는 뜻이므로
    if (newExceptedWeight === 0) {
      // count에 -1을 할당한다.
      count = -1;
      // 0이 아니라면
    } else {
      // 새로 확인을 시작할 위치와 남은 무게를 설정한다.
      from = newFrom;
      loadingWeight = N - newExceptedWeight;
    }
  }

  return count;
}

/**
 * 화물들을 최대한 운반해보고 남은 무게를 반환하는 함수
 * @param {number} from 확인을 시작할 위치
 * @param {Array<number>} weights 화물들의 무게
 * @param {number} loadingWeight 적재중량 N
 * @returns 남은 무게
 */
function check(from, weights, loadingWeight) {
  // 화물들을 순회하면서
  for (let i = from; i < weights.length; i++) {
    // 화물의 무게가 정량보다 가벼우면
    if (weights[i][0] <= loadingWeight) {
      // 해당 무게로 가능항 운반횟수를 구해서
      let count = Math.floor(loadingWeight / weights[i][0]);
      // 화물의 운반횟수로 할당하고,
      weights[i][1] = count;
      // 운반한 총 무게를 정량에서 빼준다.
      loadingWeight -= weights[i][0] * count;
    }
  }

  // 순회를 마치고 남은 무게를 반환한다.
  return loadingWeight;
}

/**
 * 다음 회차의 확인을 시작할 위치와 무게를 조정하는 함수
 * @param {number} from 확인을 시작할 위치
 * @param {Array<number>} weights
 * @returns 새로 확인을 시작할 위치, 새로 확인을 시작할 때 제외할 무게
 */
function adjust(from, weights) {
  let exceptedWeight = 0;

  // 두번째로 가벼운 화물부터 순회를 해서
  for (let i = weights.length - 2; i >= 0; i--) {
    // 만약 화물의 운반횟수가 0이 아니라면
    if (weights[i][1] !== 0) {
      // 운반횟수를 1회 줄이고
      weights[i][1] -= 1;
      // 다음 순회시 제외해도 되는 무게를 구한 뒤,
      exceptedWeight = weights
        .slice(0, i + 1)
        .reduce((acc, weight) => acc + weight[0] * weight[1], 0);
      // 다음 회차에서 확인을 시작할 위치를 운반횟수를 줄인 화물로 설정하고,
      from = i + 1;
      // 순회를 종료한다.
      break;
    }
  }

  return { newFrom: from, newExceptedWeight: exceptedWeight };
}

const N = 29;
const cargoWeights = [9, 7, 5, 3];
const result = countTheLeastMovement(N, cargoWeights);
console.log("결과", result);
// 예외 N = 27, [3,5,7]
