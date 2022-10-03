// # 문제89 : 지식이의 게임 개발 2

// (연계형 문제 - 88번을 먼저 풀고 오셔야 합니다!)
// 제코베의 도움을 받아 성공적으로 지도를 만들어낸 지식이는 캐릭터의 움직임을 구현했습니다.
// 하지만 지도 위의 캐릭터 위치를 나타내는데 문제가 발생했습니다.
// 지식이는 지도 위에서 캐릭터의 위치를 나타내기 위해 다시 한번 제코베에 도움을 요청합니다.

// 지도 위에서 캐릭터의 위치를 나타내주세요

// 1. 지도는 88번 문제의 해답을 사용해 주세요
// 2. 입력값은 지도, 캐릭터의 움직임입니다.
// 3. 캐릭터의 움직임은 { 상:1, 하:2, 좌:3, 우:4 }로 정수로 이루어진 배열이 들어갑니다.
// 4. 벽과 장애물은 통과할 수 없습니다.
// 5. 마지막 캐릭터의 위치를 반영한 지도를 보여주고 위치를 반환하는 함수를 작성해 주세요.

// 데이터
// 가로 = 4
// 세로 = 5
// 캐릭터위치 = [0, 0]
// 장애물 = [[0,1],[1,1],[2,3],[1,3]]
// console.log('캐릭터 이동 전 지도')
// 지도 = make_map(가로, 세로, 캐릭터위치, 장애물)

// 움직임 = [2,2,2,4,4,4]
// console.log('캐릭터 이동 후 지도')
// 캐릭터 위치 = move(지도, 움직임)

// 출력
// 캐릭터 이동 전 지도
// [2, 2, 2, 2, 2, 2]
// [2, 1, 2, 0, 0, 2]
// [2, 0, 2, 0, 2, 2]
// [2, 0, 0, 0, 2, 2]
// [2, 0, 0, 0, 0, 2]
// [2, 0, 0, 0, 0, 2]
// [2, 2, 2, 2, 2, 2]

// 캐릭터 이동 후 지도
// [2, 2, 2, 2, 2, 2]
// [2, 0, 2, 0, 0, 2]
// [2, 0, 2, 0, 2, 2]
// [2, 0, 0, 0, 2, 2]
// [2, 0, 0, 0, 1, 2]
// [2, 0, 0, 0, 0, 2]
// [2, 2, 2, 2, 2, 2]
// 캐릭터위치 : [4, 4]

import { symbol, makeMap } from "./88-gameDevelopment.js";

/**
 * 캐릭터가 움직인 이후의 위치와 지도를 반환하는 함수
 * @param {number[][]} map 지도
 * @param {number[]} movements 캐릭터의 움직임
 */
function move(map, movements) {
  // 캐릭터에 움직임에 따라 변경될 좌표값을 객체로 선언해둔다.
  const direction = {
    1: [-1, 0],
    2: [1, 0],
    3: [0, -1],
    4: [0, 1],
  };

  // 지도에서 캐릭터의 위치를 찾는다.
  let characterPosition = findCharacter(map);

  // 움직임을 하나씩 순회하면서
  movements.forEach((movement) => {
    // 1, 2, 3, 4 중 무엇인지 확인하고 해당하는 좌표값을 구조분해할당 한다.
    const [x, y] = direction[movement];
    // 현재 캐릭터의 위치에서 좌표값을 구조분해할당 한다.
    const [prevX, prevY] = characterPosition;
    // 현재 캐릭터의 좌표값을 변경한다.
    const newX = prevX + x;
    const newY = prevY + y;
    // 변경된 좌표의 값이 0이라면 캐릭터가 이동할 수 있는 위치이므로
    if (map[newX][newY] === symbol.empty) {
      // 캐릭터를 이동시키고
      map[newX][newY] = symbol.character;
      // 이전 좌표의 값은 0으로 변경하고
      map[prevX][prevY] = symbol.empty;
      // 캐릭터 위치는 새로운 좌표값으로 재할당한다.
      characterPosition = [newX, newY];
    }
  });

  return { mapAfterMovement: map, characterPosition };
}

/**
 * 지도에서 캐릭터의 좌표를 찾아서 반환
 * @param {number[][]} map 지도
 * @returns {number[]} 캐릭터의 좌표
 */
function findCharacter(map) {
  for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
    for (let colIndex = 0; colIndex < map[rowIndex].length; colIndex++) {
      if (map[rowIndex][colIndex] === symbol.character) {
        return [rowIndex, colIndex];
      }
    }
  }
}

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
console.log("캐릭터 이동 전 지도");
map.forEach((row) => console.log(row));

const movement = [2, 2, 2, 4, 4, 4];
const { mapAfterMovement, characterPosition } = move(map, movement);
console.log(
  "캐릭터 이동 후 지도",
  mapAfterMovement,
  "\n 캐릭터 위치",
  characterPosition
);
