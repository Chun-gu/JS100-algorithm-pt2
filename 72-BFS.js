// # 문제72 : 너비 우선 탐색

// **너비 우선 탐색**이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

// 다음과 같이 입력이 주어질 때 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

// 데이터
// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D A F C B

const BFS = (graph, start) => {
  // 방문한 노드
  const visited = [];
  // 방문해야 할 노드
  let queue = [start];

  // 방문해야 할 노드가 남아있다면
  while (queue.length !== 0) {
    // 노드를 하나 빼서
    const node = queue.shift();

    // 해당 노드가 방문된 적이 없다면
    if (!visited.includes(node)) {
      // 방문한 노드에 넣고
      visited.push(node);
      // 해당 노드에 연결된 노드들을 기존 큐의 뒤에 넣어준다.
      queue = [...queue, ...graph[node]];
    }
  }

  return visited.join(" ");
};

const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};
const result = BFS(graph, "E");
console.log(result);
