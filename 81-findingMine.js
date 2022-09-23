// # 문제81 : 지뢰찾기

// 지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. **깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램**을 만드세요.

// - 아래 Case 외 예외 사항은 고려하지 않습니다.
// (예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.) 
// 실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.

// 입력
// 0 1 0 0 0
// 0 0 0 0 0
// 0 0 0 1 0
// 0 0 1 0 0
// 0 0 0 0 0
// //"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

// 출력
// * f * 0 0
// 0 * 0 * 0
// 0 0 * f *
// 0 * f * 0
// 0 0 * 0 0

/**
 * 깃발 위치가 표시된 문자열을 받아서 지뢰와 깃발을 표시한 문자열을 반환하는 함수
 * @param {string} flagMap 깃발 위치가 표시된 문자열
 * @returns 지뢰와 깃발 표시를 마친 문자열
 */
function markFlagsAndMines(flagMap) {
  // input을 줄바꿈 기준으로 나눠서 배열로 만들고, 
  // 각 배열을 공백 기준으로 나눠 배열로 만든 뒤에 숫자로 변환한다.
  const rows = flagMap.split("\n").map((el) => el.split(" ").map(Number));

  // 이중배열 rows를 순회하며 각 cell을 탐색하는데
  rows.forEach((row, i) => {
    row.forEach((cell, j) => {
      // 현재 cell의 값이 1이라면 지뢰라는 뜻이므로
      if (cell === 1) {
        // 현재 cell을 f로 변경하고
        row[j] = "f";
        // 상하좌우 cell이 존재할 때, 
        // 해당 cell이 0(falsy)이면 *로 바꾸고 아니면 유지
        if (i - 1 >= 0) rows[i - 1][j] ||= "*";
        if (i + 1 < row.length) rows[i + 1][j] ||= "*";
        if (j - 1 >= 0) row[j - 1] ||= "*";
        if (j + 1 < row.length) row[j + 1] ||= "*";
      }
    });
  });

  // row들 사이에 줄바꿈 넣고 쉼표를 전부 공백으로 바꿔서 문자열로 만든다.
  return rows.join("\n").replaceAll(",", " ");
}

const flagMap = `1 1 0 0 0
0 0 0 0 0
0 0 0 1 0
0 0 1 0 0
0 0 1 0 0`;
const markedMap = markFlagsAndMines(flagMap);
console.log(markedMap);
