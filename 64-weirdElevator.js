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
  let loadingWeight = N;
  let from = 0;
  const weights = cargoWeights
    .sort((a, b) => b - a)
    .map((weight) => [weight, 0]);

  let count = 0;

  while (count === 0) {
    const { remainedWeight } = check(from, weights, loadingWeight);
    console.log(loadingWeight);

    if (remainedWeight === 0) {
      count = weights.reduce((acc, weight) => acc + weight[1], 0);
    }

    const { newFrom, newExceptedWeight } = adjust(from, weights);

    if (newExceptedWeight === 0) {
      count = -1;
    } else {
      from = newFrom;
      loadingWeight = N - newExceptedWeight;
    }
  }

  return count;
}

function check(from, weights, loadingWeight) {
  for (let i = from; i < weights.length; i++) {
    if (weights[i][0] <= loadingWeight) {
      let count = Math.floor(loadingWeight / weights[i][0]);
      weights[i][1] = count;
      loadingWeight -= weights[i][0] * count;
    }
  }

  return { remainedWeight: loadingWeight };
}

function adjust(from, weights) {
  let exceptedWeight = 0;

  for (let i = weights.length - 2; i >= 0; i--) {
    if (weights[i][1] !== 0) {
      weights[i][1] -= 1;
      exceptedWeight = weights
        .slice(0, i + 1)
        .reduce((acc, weight) => acc + weight[0] * weight[1], 0);
      from = i + 1;
      break;
    }
  }

  return { newFrom: from, newExceptedWeight: exceptedWeight };
}

const N = 27;
const cargoWeights = [3, 5, 7];
const result = countTheLeastMovement(N, cargoWeights);
console.log("결과", result);
// 예외 N = 27, [3,5,7]
