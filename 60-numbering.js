// 문제60 : 번호 매기기

// 새 학기가 되어 이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다.
// 데이터에 입력된 이름을 아래와 같이 출력해 주세요.

// 데이터
const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];

// 출력
// 번호: 1, 이름: 강은지
// 번호: 2, 이름: 강채연
// 번호: 3, 이름: 권윤일
// 번호: 4, 이름: 김민호
// 번호: 5, 이름: 김유정
// 번호: 6, 이름: 김진이
// 번호: 7, 이름: 김채리
// 번호: 8, 이름: 박지호
// 번호: 9, 이름: 박현서
// 번호: 10, 이름: 최성훈
// 번호: 11, 이름: 한지호
// 번호: 12, 이름: 홍유진

/**
 * 학생 이름을 정렬해서 번호를 매기고 반환하는 함수
 * @param {string[]} students 학생 이름이 담긴 배열
 * @param {boolean} isAscending true면 오름차순, false면 내림차순
 * @returns 정렬되고 번호가 매겨진 학생 목록
 */
function numberingStudents(students, isAscending) {
  const result = students
    .sort((a, b) => {
      if (isAscending) {
        // 오름차순 정렬
        return a > b ? -1 : 1;
      } else {
        // 내림차순 정렬
        return a < b ? -1 : 1;
      }
    })
    .map((student, index) => `번호: ${index + 1}, 이름: ${student}`)
    .join("\n");

  return result;
}

const result = numberingStudents(students, true);
console.log(result);
