// # 문제99 : 토끼들의 행진

// 토끼들이 징검다리를 건너려고 합니다. 하지만 돌이 부실해서 몇 번 건너지 못할 것 같습니다.
// 대기 중인 토끼들의 통과 여부를 배열에 담아 출력해 주세요.

// 1. 각 돌들이 얼마나 버틸 수 있는지 배열로 주어집니다.

// 2. 각 토끼가 착지할 때마다 돌의 내구도는 1씩 줄어듭니다.
//     ex) [1,2,1,4] 각 돌마다 1마리 2마리 1마리 4마리의 착지를 버틸 수 있습니다.

// 3. 토끼들은 점프력이 각자 다릅니다.
//     ex) [2,1] 첫 번째 토끼는 2칸씩, 두 번째 토끼는 1칸씩 점프합니다.

// 4. 각 토끼들은 순서대로 다리를 건넙니다.

// 입력
// 돌의내구도 = [1, 2, 1, 4]
// 토끼의점프력 = [2, 1]

// 출력
// ['pass', 'pass']

// 입력
// 돌의내구도 = [1, 2, 1, 4, 5, 2]
// 토끼의점프력 = [2, 1, 3, 1]

// 출력
// ['pass', 'pass', 'fail', 'fail']

/**
 * 토끼들이 돌다리를 건널 때의 성패를 반환하는 함수
 * @param {number[]} stones 돌들의 내구도 배열
 * @param {number[]} rabbits 토끼들의 점프력 배열
 * @returns {string[]}각 토끼들의 도하 결과
 */
function crossStoneBridge(stones, rabbits) {
  // 결과 배열에 미리 pass로 채워놓는다.
  const result = new Array(rabbits.length).fill("pass");

  // 토끼를 한마리씩 순회한다.
  for (let i = 0; i < rabbits.length; i++) {
    // 점프력이 2인 토끼는 index 1인 돌 먼저 밟으므로
    // 토끼의 점프력에서 1을 뺀 j부터 시작해서 점프력을 더해가며 순회한다.
    for (let j = rabbits[i] - 1; j < stones.length; j += rabbits[i]) {
      // 토끼가 착지한 돌이 0이 아니라면
      if (stones[j] !== 0) {
        // 돌에서 1을 빼고
        stones[j] -= 1;
      } else {
        // 0이라면 실패이므로
        // 결과 배열에서 현재 토끼 자리의 값을 fail로 바꾸고,
        // 다음 토끼로 넘어간다.
        result[i] = "fail";
        break;
      }
    }
  }

  return result;
}

const stones = [1, 2, 1, 4, 5, 2];
const rabbits = [2, 1, 3, 1];

const result = crossStoneBridge(stones, rabbits);
console.log(result);
