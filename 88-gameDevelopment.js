// # 문제88 : 지식이의 게임 개발

// 지식이는 게임을 만드는 것을 좋아합니다. 하지만 매번 다른 크기의 지도와 장애물을 배치하는데 불편함을 겪고 있습니다. 이런 불편함을 해결하기 위해 **지도의 크기와 장애물의 위치, 캐릭터의 위치만 입력하면 게임 지형을 완성해 주는 프로그램**을 만들고 싶습니다.  지식이를 위해 게임 지형을 만드는 프로그램을 작성해 주세요.

// - 가로(n), 세로(m)의 크기가 주어집니다.
// - 지형의 테두리는 벽으로 이루어져 있습니다.
// - 캐릭터가 있는 좌표가 배열 형태로 주어집니다.
// - 장애물이 있는 좌표가 2차원 배열 형태로 주어집니다.

// 지도는 n x m 크기의 배열이며 배열 안의 값은
//    -움직일 수 있는 공간(0)
//    -캐릭터(1)
//    -벽(2)
// 3개로 구분되어 있습니다.

// 입출력예시

// 입력
// 가로 = 4
// 세로 = 5
// 캐릭터위치 = [0,0]
// 장애물 = [[0,1],[1,1],[2,3],[1,3]]

// make_map(가로, 세로, 캐릭터위치, 장애물)

// 출력
// [2, 2, 2, 2, 2, 2]
// [2, 1, 2, 0, 0, 2]
// [2, 0, 2, 0, 2, 2]
// [2, 0, 0, 0, 2, 2]
// [2, 0, 0, 0, 0, 2]
// [2, 0, 0, 0, 0, 2]
// [2, 2, 2, 2, 2, 2]

/**
 * 배치할 기호의 값을 지정해놓은 객체
 * @type {Object<string, number>}
 */
export const symbol = {
  empty: 0,
  character: 1,
  obstacle: 2,
  wall: 2,
};

/**
 * 주어진 조건에 맞는 지도를 생성하는 함수
 * @param {Object} condition 지도를 만들기 위해 주어진 조건들
 * @param {number} condition.width 지도의 가로 길이
 * @param {number} condition.height 지도의 세로 길이
 * @param {number[]} condition.character 캐릭터 위치
 * @param {number[][]} condition.obstacles 장애물 위치
 * @returns {number[][]} 지도
 */
export function makeMap({ width, height, character, obstacles }) {
  // 벽의 두께를 고려해 가로와 세로에 2씩 더한 크기로 지도를 초기화한다.
  const emptyMap = initializeMap(width + 2, height + 2);
  // 벽이 생겼으므로 기존에 주어진 캐릭터와 장애물의 좌표에 벽의 두께만큼 더해준다.
  const adjustedCharacterCoordinates = adjustCoordinates([character], 1);
  const adjustedObstaclesCoordinates = adjustCoordinates(obstacles, 1);
  // 벽을 세울 좌표를 구한다.
  const wallCoordinates = getWallCoordinates(width + 2, height + 2);
  // 빈 지도에 캐릭터, 장애물, 벽을 배치한다.
  const map = emptyMap
    .deploy(symbol.character, adjustedCharacterCoordinates)
    .deploy(symbol.obstacle, adjustedObstaclesCoordinates)
    .deploy(symbol.wall, wallCoordinates);

  // 배치가 완료된 지도를 반환한다.
  return map;
}

/**
 * 지도를 초기화 하는 함수
 * @param {number} width 가로
 * @param {number} height 세로
 * @returns {number[][]} 초기화 된 지도
 */
function initializeMap(width, height) {
  // empty의 값으로 채워진 이중 배열을 만들어 반환한다.
  return Array.from(new Array(height), () =>
    new Array(width).fill(symbol.empty)
  );
}

/**
 * 좌표를 조정하는 함수
 * @param {number[][]} coordinatesArray 조정할 좌표
 * @param {number} adjustment 조정 정도
 * @returns {number[][]} 조정된 좌표
 */
function adjustCoordinates(coordinatesArray, adjustment) {
  // 좌표에 adjustment만큼 더해서 반환한다.
  return coordinatesArray.map((coordinates) =>
    coordinates.map((coordinate) => coordinate + adjustment)
  );
}

/**
 * 벽의 좌표를 만들어 반환하는 함수
 * @param {number} width 지도의 가로 길이
 * @param {number} height 지도의 세로 길이
 * @returns {number[][]} 벽의 좌표
 */
function getWallCoordinates(width, height) {
  // 벽의 좌표를 저장할 변수를 만든다.
  const wallCoordinates = [];
  // 지도의 전체 좌표를 탐색하면서 테두리의 좌표만 배열에 넣는다.
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      if (0 < h && h < height - 1 && 0 < w && w < width - 1) continue;
      wallCoordinates.push([h, w]);
    }
  }

  return wallCoordinates;
}

/**
 * 좌표에 배치하는 함수
 * @param {number} target 배치 대상
 * @param {number[][]} coordinatesArray 배치할 좌표
 * @returns {number[][]} 배치된 지도
 */
Array.prototype.deploy = function (target, coordinatesArray) {
  // 배치해야 할 좌표를 순회하면서 해당 좌표의 값을 target으로 변경한다.
  coordinatesArray.forEach(
    (coordinates) => (this[coordinates[0]][coordinates[1]] = target)
  );

  return this;
};

const width = 4;
const height = 5;
const character = [0, 0];
const obstacles = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];
const map = makeMap({ width, height, character, obstacles });
map.forEach((row) => console.log(row));
