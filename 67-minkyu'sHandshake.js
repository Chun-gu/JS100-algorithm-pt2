/**
 * 행사에서 진행된 악수의 횟수를 받아서 민규가 한 악수의 횟수와 참가자의 수를 반환하는 함수
 * @param {number} actualHandshake 행사에서 진행된 악수의 횟수
 * @returns {Array<number>} 민규가 한 악수의 횟수와 참가자의 수
 */
function getHandshakeAndParticipant(actualHandshake) {
  // 참가자 수
  let participant = 1;
  // 총악수 횟수의 이전 기댓값
  let prevHandshake = 0;
  // 총악수 횟수의 기댓값
  let expectedHandshake = 0;
  // 민규가 한 악수 횟수
  let minkyusHandshake = 0;

  while (true) {
    console.log("참가자 수", participant);
    // 민규가 중간에 행사에서 나오지 않았을 경우 시행됐을 악수의 총횟수를 구한다.
    // 총횟수 = 전체 참가자들 중에서 2명을 뽑는 경우의 수에서 중복을 제외한 수
    // nCr => n! / r!(n - r!)인데 r = 2로 고정이므로 n * (n-1) / 2로 간략화할 수 있다.
    expectedHandshake = (participant * (participant - 1)) / 2;
    console.log("총악수 기대값", expectedHandshake);
    // 악수의 총횟수가 실제로 진행된 악수의 횟수보다 많아지면
    if (actualHandshake < expectedHandshake) {
      // 실제 악수의 횟수에서 이전 기대 횟수의 차이가 민규가 한 악수의 횟수이다.
      minkyusHandshake = actualHandshake - prevHandshake;
      break;
    }

    // 실제 횟수보다 적으면 방금 계산한 총횟수는 prevHandshake에 할당한다.
    prevHandshake = expectedHandshake;
    console.log("이전 기대값", prevHandshake);

    // 참가자 수를 하나 증가시킨다.
    participant++;
  }

  return [minkyusHandshake, participant];
}

const input = 0;
const result = getHandshakeAndParticipant(input);
console.log(result);
