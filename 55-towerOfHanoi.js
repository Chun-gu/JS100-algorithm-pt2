const routes = [];

function hanoi(num, from, temp, to) {
  console.log("원판 개수", num);
  console.log("from", from, "temp", temp, "to", to);
  // 원판이 한 개일 때는 from에서 to 기둥으로 바로 옮기면 된다.
  if (num === 1) {
    routes.push([from, to]);
    console.log(`원판 한 개니까 ${from}에서 ${to}로 이동`);
    return;
  }

  // 한 개가 아닐 때는,
  // 최하단 원반을 제외한 n-1개의 원반들을 필요하다면 to 기둥을 경유해서 재귀적으로 temp 기둥에 옮긴다.
  hanoi(num - 1, from, to, temp);
  // 위의 재귀가 끝난 후엔 최하단 원반 하나가 from 기둥에 남아있고,
  // to 기둥이 비어있으므로 최하단 원반을 to 기둥으로 옮긴다.
  routes.push([from, to]);
  console.log(`${from}에서 ${to}로 이동`);
  // temp 기둥에 있던 원반들을 필요하다면 from을 경유해서 재귀적으로 to 기둥에 옮긴다.
  hanoi(num - 1, temp, from, to);
}

hanoi(3, "A", "B", "C");
console.log(routes);
console.log(routes.length);
