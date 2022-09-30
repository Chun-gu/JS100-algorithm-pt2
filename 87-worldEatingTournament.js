// # 문제87 : 천하제일 먹기 대회

// 천하제일 먹기 대회가 개최되었습니다.
// 이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 

// 1. 같은 이름의 선수는 없습니다.
// 2. 접시의 수가 같은 경우는 없습니다.

/**
 * 대회 진행 후 참가자들의 등수를 반환하는 함수
 * @param {Array<string>} competitors 참가자들 배열
 * @param {Array<number>} dishes 각 참가자들이 먹은 접시 수 배열
 * @returns {Object.<string,number>}각 참가자들의 등수
 */
function getRanking(competitors, dishes) {
  const ranks = competitors
    // 참가자와 참가자가 먹은 접시 개수를 짝지어 이중배열을 만든다.
    .map((competitor, index) => [competitor, dishes[index]])
    // 접시 개수를 기준으로 내림차순 정렬한다.
    .sort((a, b) => b[1] - a[1])
    // 접시 개수를 등수로 바꾼다.
    .map((competitor, index) => [competitor[0], index + 1]);

  // 이중 배열인 순위를 객체로 변환한다.
  const ranking = Object.fromEntries(ranks);

  return ranking;
}

const competitors = ["홍길동", "엄석대", "연개소문", "김첨지"];
const dishes = [2, 1, 10, 0];
const ranking = getRanking(competitors, dishes);
console.log(ranking);
