// # 문제86 : 회전 초밥

// 쉔은 회전 초밥집에 갔습니다.
// 초밥집에 간 쉔은 각 초밥에 점수를 매기고 낮은 점수의 순서로 초밥을 먹으려 합니다.
// 이때 n위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력하세요.

// 1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
// 2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
// 3. 초밥은 1개 이상 존재합니다.

// 예)
// A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는
// 점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 됩니다.
// A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하는 상황이 옵니다.
// 2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있습니다.
// 즉, A B C D E **C** 의 순서로, 접시가 5번 지나가고 먹게 된다.

// 입력
// point = [1,1,3,2,5]
// dish = 3

// 출력
// 5

// 입력
// point = [5,2,3,1,2,5]
// dish = 1

// 출력
// 10

//point 각 접시별 점수가 들어있는 배열
//dish 먹고자하는 접시의 위치

/**
 * 목표 접시를 먹기까지 먹어야하는 접시의 개수를 반환하는 함수
 * @param {Array<number>} points 점수들의 배열
 * @param {number} targetDish 목표로 하는 접시의 번호
 */
function countEatenDishes(points, targetDish) {
  // 접시의 점수에 index로 번호를 붙여 이중배열을 만든다.
  // [5, 2, 3, 1, 2, 5] => [[1, 5], [2, 2], [3, 3], [4, 1], [5, 2], [6, 5]]
  let dishPoints = points.map((point, index) => [index + 1, point]);
  // 점수를 오름차순으로 정렬한다.
  // [5, 2, 3, 1, 2, 5] => [1, 2, 2, 3, 5, 5]
  const sortedPoints = points.sort((a, b) => a - b);
  // 지나가야 하는 접시의 수를 0으로 초기화한다.
  let count = 0;

  // 오름차순으로 정렬된 점수들 중 하나와
  for (const point of sortedPoints) {
    // 각 접시에 해당하는 점수를 하나씩 탐색하며 비교한다.
    for (let i = 0; i < dishPoints.length; i++) {
      // 접시 하나의 탐색을 시작했으니 count에 1을 더한다.
      count += 1;
      // 접시의 점수가 현재 점수와 일치하고
      if (dishPoints[i][1] === point) {
        // 목표 접시 번호와 일치하면 탐색하지 않아도 됐으므로
        // count에서 1을 빼서 반환한다.
        if (dishPoints[i][0] === targetDish) return count - 1;
        // 일치하지 않으면
        // 해당 접시를 기준으로 왼쪽과 오른쪽 배열로 나눈다.
        const left = dishPoints.slice(0, i);
        const right = dishPoints.slice(i + 1);
        // 왼쪽과 오른쪽을 뒤바꿔 재할당한다.
        dishPoints = [...right, ...left];
        // 다음 점수를 탐색하기 위해 break한다.
        break;
      }
    }
  }
}

const points = [5, 2, 3, 1, 2, 5];
const dish = 1;
const count = countEatenDishes(points, dish);
console.log(count);
