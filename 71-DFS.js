// # 문제71 : 깊이 우선 탐색

// **깊이 우선 탐색**이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

// 다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

// 데이터
// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D F A C B

const DFS = (graph, start) => {
  // 방문한 노드
  const visited = [];
  // 방문해야 할 노드
  let stack = [start];

  // 방문해야 할 노드가 남아있다면
  while (stack.length !== 0) {
    // 노드를 하나 빼서
    const node = stack.pop();
    // 해당 노드가 방문된 적이 없다면
    if (!visited.includes(node)) {
      // 방문한 노드에 넣고
      visited.push(node);
      // 해당 노드에 연결된 노드들을 기존 큐의 뒤에 넣어준다.
      stack = [...stack, ...graph[node]];
    }
  }

  return visited;
};

const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

const result = DFS(graph, "E");
console.log(result);
