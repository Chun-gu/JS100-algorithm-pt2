const arr = [3, 5, 2, 6, 4, 1, 8, 7, 9];

function mergeSort(arr) {
  // 배열의 길이가 0 또는 1이면 그대로 반환
  if (arr.length < 2) {
    return arr;
  }
  // 배열의 길이를 반으로 나눈 값을 내림하여 중간값으로 정한다.
  const mid = Math.floor(arr.length / 2);
  // 배열에서 시작값(0)부터 중간값까지 잘라서 좌측 배열로 정한다.
  const leftArr = arr.slice(0, mid);
  // 배열에서 중간값부터 마지막값까지 잘라서 우측 배열로 정한다.
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// 중간값을 기준으로 나뉘었던 좌측배열과 우측배열을 정렬하여 합병하는 함수
function merge(leftArr, rightArr) {
  // 정렬된 배열이 들어갈 배열을 선언한다.
  const sortedArr = [];

  // 좌측배열과 우측배열이 모두 존재하는 동안,
  while (leftArr.length && rightArr.length) {
    // 좌측배열 첫번째 요소가 우측배열의 첫번째 요소보다 작거나 같으면,
    if (leftArr[0] <= rightArr[0]) {
      // 좌측배열의 첫번째 요소를 정렬된 배열에 넣고,
      sortedArr.push(leftArr.shift());
    } else {
      // 그 반대라면 우측배열의 첫번째 요소를 정렬된 배열에 넣는다.
      sortedArr.push(rightArr.shift());
    }
  }

  // 정렬된 배열과 좌측배열, 우측배열의 남은 값을 하나의 배열로 만들어 반환한다.
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(arr));
