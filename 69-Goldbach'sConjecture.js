// 문제69 : 골드바흐의 추측

// 골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

// 위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

// 예)
// 100 == 47 + 53
// 56 == 19 + 37

// **2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를** 작성하세요.

// * 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.

/**
 * 0부터 주어진 숫자 사이의 소수들을 반환하는 함수
 * @param {number} number 주어진 수
 * @returns {Array<number>} 주어진 수보다 작은 소수들의 배열
 */
function getPrimeNumbers(number) {
  // 2부터 주어진 수까지의 수로 이뤄진 배열을 만든다.
  const numbers = [];
  for (let i = 2; i <= number; i++) {
    numbers[i] = i;
  }

  const sqrt = Math.sqrt(number);

  // 2부터 주어진 수까지 순회하면서
  for (let i = 2; i <= number; i++) {
    console.log("현재 숫자", i);
    // i번째의 요소가 0이라면 순회를 계속하고
    if (numbers[i] === 0) continue;
    // 아니라면 해당 숫자를 제외한 배수들을
    for (let j = i + i; j <= number; j += i) {
      // 0으로 변경한다.
      console.log("지울 숫자", j);
      numbers[j] = 0;
    }
  }

  // 0이 아닌 요소(소수)들만 모아서 새로운 배열을 만든다.
  const primeNumbers = numbers.filter((number) => number !== 0);

  return primeNumbers;
}

/**
 * 주어진 수의 골드바흐 파티션을 배열로 반환하는 함수
 * @param {number} number 주어진 수
 * @returns {number[][]} 골드바흐 파티션들의 배열
 */
function getGoldbachPartitions(number) {
  // 골드바흐 파티션을 저장할 배열
  const partitions = [];

  // 0부터 주어진 수까지의 소수들을 구해서 저장한다.
  const primeNumbers = getPrimeNumbers(number);

  // 주어진 수의 절반까지만 순회하며
  for (let i = 0; primeNumbers[i] <= number / 2; i++) {
    // 주어진 수와 소수의 차이를 구하고
    const diff = number - primeNumbers[i];
    // 그 차이가 소수들의 배열에 있다면
    if (primeNumbers.find((numbers) => numbers === diff)) {
      // partition 배열에 저장한다.
      partitions.push([primeNumbers[i], diff]);
    }
  }

  return partitions;
}

const input = 100;
const result = getGoldbachPartitions(input);
console.log(result);
