// # 문제94 : 페이지 교체 - LRU 알고리즘

// LRU 알고리즘이란 페이지 교체 알고리즘으로써, Least Resently Used의 약자입니다. 즉 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘입니다.
// 이 알고리즘의 기본 가설은 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하에 페이지 교체가 진행됩니다.

// 메모리의 크기가 i로 주어지고 들어올 페이지들이 n으로 주어졌을 때, 전체 실행시간을 구해주세요.

// 만약 스택 안에 같은 스케줄이 있다면 **hit** 이라고 하며 실행시간은 **1초** 입니다. 스택 안에 스케줄이 없다면 **miss** 라고 하며 실행시간은 **6초** 입니다.

/**
 * 페이지 교체를 마치는데 걸리는 실행 시간을 계산해 반환하는 함수
 * @param {number} memoryLimit 메모리 크기 제한
 * @param {string} pages 들어올 페이지들
 * @returns {number} 실행 시간
 */
function calculateRuntime(memoryLimit, pages) {
  // hit시 소요되는 런타임
  const HIT = 1;
  // miss시 소요되는 런타임
  const MISS = 6;
  // 런타임 초기화
  let runtime = 0;
  // 페이지를 저장해둘 메모리
  const memory = [];

  // 주어진 메모리 크기가 0일 경우 총 page 수에 miss의 실행시간을 곱해 반환한다.
  if (memoryLimit === 0) {
    runtime = MISS * pages.length;
    return runtime;
  }

  // 주어진 메모리 크기가 0이 아닐 경우
  // page를 하나씩 순회하며
  for (const page of pages) {
    // 메모리에서 현재 페이지의 index를 구한다.
    const pageIndexInMemory = memory.indexOf(page);
    // index가 -1이 아니라면 memory에 존재한다는 뜻이므로
    if (pageIndexInMemory !== -1) {
      // 이미 존재하는 page를 잘라내어
      const pageInMemory = memory.splice(pageIndexInMemory, 1);
      // 메모리의 맨 뒤에 넣는다.
      memory.push(...pageInMemory);
      // hit의 실행시간을 더하고
      runtime += HIT;
      //다음 page를 순회한다.
      continue;
    }
    // 메모리에 현재 page가 없고,
    // 아직 주어진 메모리가 다 차지 않았다면
    if (memory.length < memoryLimit) {
      // 메모리에 현재 page를 추가한다.
      memory.push(page);
    } else {
      // 메모리가 다 찼다면 맨 앞의 page를 제거하고 현재 page를 추가한다.
      memory.shift();
      memory.push(page);
    }
    // 메모리에 page를 추가한 뒤, miss의 실행시간을 더한다.
    runtime += MISS;
  }

  return runtime;
}

const memoryLimit = 0;
const pages = "ABCEDF";
const runtime = calculateRuntime(memoryLimit, pages);
console.log(runtime);
