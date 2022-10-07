// # 문제93 : 페이지 교체 - 선입선출 알고리즘

// 페이지 교체 알고리즘은 메모리를 관리하는 운영체제에서, 페이지 부재가 발생하여 새로운 페이지를 할당하기 위해 현재 **할당된 페이지 중 어느 것을 교체할지를 결정하는 방법**입니다.
// 이 알고리즘이 사용되는 시기는 페이지 부재(Page Fault)가 발생해 새로운 페이지를 적재해야 하지만 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용됩니다. 빈 페이지가 없는 상황에서 메모리에 적재된 페이지와 적재할 페이지를 교체함으로 페이지 부재 문제를 해결할 수 있습니다.

// 이 중 선입선출(FIFO) 알고리즘은 가장 먼저 들어와서 가장 오래있었던 페이지를 우선으로 교체시키는 방법을 의미합니다.

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
    // 메모리에 이미 현재 page가 있다면
    if (memory.includes(page)) {
      // hit의 실행시간을 더하고
      runtime += HIT;
      // 다음 page를 순회한다.
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
const pages = "BCBAEBCE";
const runtime = calculateRuntime(memoryLimit, pages);
console.log(runtime);
