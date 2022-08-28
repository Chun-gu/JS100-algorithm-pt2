// 문제56 : 객체의 함수 응용

//다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

// 데이터
const nationWidth = {
  Korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

// 출력
// England 22023

// 타겟 국가의 면적과 가장 비슷한 국가와 그 면적을 반환하는 함수
function findMostSimilarNationWidth(nationWidth, nation) {
  // 타겟 국가의 면적을 변수에 저장하고,
  const targetNationWidth = nationWidth[nation];
  // 타겟 국가는 객체에서 삭제한다.
  delete nationWidth[nation];

  // 면적 차이를 저장할 배열을 선언한다.
  const widthDiffs = [];

  // 객체를 iterable한 배열로 만들어 순회하면서 국가명과 면적에 접근한다.
  for (const [nation, width] of Object.entries(nationWidth)) {
    // 타겟 국가와 나머지 국가들의 면적 차이를 구해서 할당한 뒤,
    const diff = Math.abs(width - targetNationWidth);
    // 현재 순회 중인 국가의 면적을 차이값으로 변경하고,
    nationWidth[nation] = diff;
    // 차이값을 면적 차이 배열에 저장한다.
    widthDiffs.push(diff);
  }

  // 면적 차이 배열을 오름차순으로 정렬하면 차이가 제일 적은 값이 앞으로 온다.
  widthDiffs.sort((a, b) => a - b);

  // 제일 적은 차이값에 해당하는 국가를 찾아서 변수에 할당한다.
  const mostSimilarNation = Object.keys(nationWidth).find(
    (key) => nationWidth[key] === widthDiffs[0]
  );

  // 국가명과 면적 차이값을 반환한다.
  return [mostSimilarNation, widthDiffs[0]];
}

const [mostSimilarNation, widthDiff] = findMostSimilarNationWidth(
  nationWidth,
  "Korea"
);
console.log(mostSimilarNation, widthDiff);
