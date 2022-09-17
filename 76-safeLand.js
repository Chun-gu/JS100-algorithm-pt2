// # 문제76 : 안전한 땅

// 전쟁이 끝난 후, A 나라에서는 폐허가 된 도시를 재건하려고 한다. 그런데 이 땅은 전쟁의 중심지였으므로 전쟁 중 매립된 지뢰가 아직도 많이 남아 있다는 것이 판명되었다.
// 정부는 가장 먼저 지뢰를 제거하기 위해 수색반을 꾸렸다.

// 수색반은 가장 효율적인 지뢰 제거가 하고 싶다. 수색반은 도시를 격자무늬로 나눠놓고 자신들이 수색할 수 있는 범위 내에 가장 많은 지뢰가 매립된 지역을 가장 먼저 작업하고 싶다.

// 가장 먼저 테스트 케이스의 수를 나타내는 1이상 100 이하의 자연수가 주어진다.
// 각 테스트 케이스의 첫 줄에는 수색할 도시의 크기 a와 수색반이 한 번에 수색 가능한 범위 b가 주어진다. (a와 b 모두 정사각형의 가로 또는 세로를 나타낸다. 예를 들어 10이 주어지면 10x10칸의 크기를 나타낸다.)

// 그 후 a 줄에 걸쳐 도시 내 지뢰가 있는지의 여부가 나타난다.
// 0은 지뢰가 없음 1은 지뢰가 있음을 뜻한다.

// 각 테스트 케이스에 대해 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수를 구하라.

// 입력
// 1
// 5 3
// 1 0 0 1 0
// 0 1 0 0 1
// 0 0 0 1 0
// 0 0 0 0 0
// 0 0 1 0 0

// 출력
// 3

/**
 * 한 번의 탐색으로 찾을 수 있는 지뢰의 최대 개수를 반환하는 함수
 * @param {number} area 탐색해야 할 전체 영역 크기
 * @param {number} searchRange 탐색할 수 있는 범위
 * @param {number[][]} mineMap 지뢰 위치
 * @returns 한 번의 탐색으로 찾을 수 있는 지뢰의 최대 개수
 */
function getHighestMineCount(area, searchRange, mineMap) {
  let mineCount = 0;
  let mineCounts = [];

  // 탐색 가능 범위가 전체 영역보다 넓다면
  if (searchRange > area) {
    // 지뢰 위치를 나타낸 배열을 평탄화하고 전부 더해서 반환한다.
    return mineMap.flat().reduce((acc, curr) => acc + curr, 0);
  }

  // 영역의 가로 좌표
  for (let areaRow = 0; areaRow <= area - searchRange; areaRow++) {
    // 영역의 세로 좌표
    for (let areaColumn = 0; areaColumn <= area - searchRange; areaColumn++) {
      // 탐색범위의 가로 좌표
      for (
        let searchRow = areaRow;
        searchRow <= areaRow + searchRange - 1;
        searchRow++
      ) {
        // 탐색범위의 세로 좌표
        for (
          let searchColumn = areaColumn;
          searchColumn <= areaColumn + searchRange - 1;
          searchColumn++
        ) {
          // 해당 위치의 지뢰 개수를 더한다.
          mineCount += mineMap[searchRow][searchColumn];
        }
      }
      // 지뢰 개수를 배열에 추가한 뒤,
      mineCounts.push(mineCount);
      // 지뢰 개수를 0으로 초기화한다.
      mineCount = 0;
    }
  }

  // 지뢰개수 중 최대값을 구한다.
  const highestMineCount = Math.max(...mineCounts);

  return highestMineCount;
}

const area = 5;
const searchRange = 3;
const mineMap = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
const highestMineCount = getHighestMineCount(area, searchRange, mineMap);
console.log(highestMineCount);
