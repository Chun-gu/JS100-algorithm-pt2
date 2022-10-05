// # 문제 91 : 반평균 등수

// 한 반에 30명인 학생, 총 7개의 반 점수가 '국어, 영어, 수학, 사회, 과학' 순서로 있는 다중 리스트를 랜덤 한 값으로 만들어주시고 아래 값을 모두 출력하세요.

// 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
// 2. 반 평균을 구하세요.
// 3. 반 1등 점수를 구하세요.
// 4. 전교 평균을 구하세요.

// (출력 형식은 상관없습니다.)

/**
 * 전교 점수 통계를 이용해 반 평균, 반 1등 점수, 전교 평균을 구해서 반환하는 함수
 * @param {number[][][]} wholeScore 전교 점수
 * @returns 반 평균, 반 1등 점수, 전교 평균
 */
function getScoreStats(wholeScore) {
  // 각 반 1등들의 점수를 저장할 배열
  const classTops = [];
  // 각 반 평균 점수를 저장할 배열
  const classAverages = [];

  // 각 반을 순회한다.
  for (const ban of wholeScore) {
    // 현재 반 학생들의 평균 점수
    const studentAverages = [];
    // 현재 반 학생의 점수들을 탐색한다.
    for (const student of ban) {
      // 현재 학생의 평균 점수를 구해서
      const studentAverage = getAverage(student);
      // 현재 반 학생들의 평균 점수 목록에 넣는다.
      studentAverages.push(studentAverage);
    }
    // 현재 반 학생들의 평균 점수 중 제일 높은 점수를
    const classTop = Math.max(...studentAverages);
    // 각 반 1등 학생들 목록에 넣고,
    classTops.push(classTop);
    // 현재 반의 평균 점수를 구해서
    const classAverage = getAverage(studentAverages);
    // 전체 반 평균 점수 목록에 넣는다.
    classAverages.push(classAverage);
  }
  // 전체 반 평균 점수로 전교 평균 점수를 구한다.
  const wholeAverage = getAverage(classAverages);

  return { classAverages, classTops, wholeAverage };
}

/**
 * 전교생들의 점수를 만들어 반환하는 함수
 * @returns {number[][][]} 전교생들의 점수
 */
function makeWholeScore() {
  // 전교생들의 점수를 저장할 배열
  const wholeScore = [];

  // 반이 7개이므로 7번 반복한다.
  for (let ban = 0; ban < 7; ban++) {
    const classScore = [];
    // 각 반의 학생이 30명이므로 30번 반복한다.
    for (let student = 0; student < 30; student++) {
      const studentScore = [];
      // 과목이 5개이므로 5번 반복한다.
      for (let subject = 0; subject < 5; subject++) {
        // 1~100점까지 랜덤으로 점수를 생성해 학생 1명의 5과목 점수를 만든다.
        studentScore.push(Math.floor(Math.random() * 100) + 1);
      }
      // 반 점수에 학생 1명의 5과목 점수 데이터를 넣는다.
      classScore.push(studentScore);
    }
    // 전교 점수에 반 하나의 전체 점수 데이터를 넣는다.
    wholeScore.push(classScore);
  }

  return wholeScore;
}

/**
 * 평균을 계산해 반환하는 함수
 * @param {number[]} numbers 평균 낼 숫자들의 배열
 * @returns {number} 평균
 */
function getAverage(numbers) {
  // 배열의 숫자들을 전부 더한다.
  const sum = numbers.reduce((prev, curr) => prev + curr, 0);
  // 배열의 길이로 나눠서 평균을 구한다.
  const average = sum / numbers.length;

  return average;
}

// 전교생들의 점수를 만든다.
const wholeScore = makeWholeScore();
const { classAverages, classTops, wholeAverage } = getScoreStats(wholeScore);
console.log("전교 점수", wholeScore);
console.log("반 평균", classAverages);
console.log("반 1등", classTops);
console.log("전교 평균", wholeAverage);
