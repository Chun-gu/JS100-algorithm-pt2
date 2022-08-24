const array = [5, 3, 7, 4, 0, -3, -1, 6, 9];

// not in-place 방식
function quickSort(array) {
  const length = array.length;

  // 길이가 2 미만이면 배열을 그대로 반환한다.
  if (length < 2) {
    return array;
  }

  // 배열의 첫번째 요소를 피벗으로 정한다.
  const pivot = array[0];
  const leftArray = [];
  const rightArray = [];

  // 배열을 순회하며 피벗보다 작으면
  for (let i = 1; i < length; i++) {
    if (array[i] < pivot) {
      // 좌측 배열에 넣고
      leftArray.push(array[i]);
    } else {
      // 피벗보다 크면 우측배열에 넣는다.
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// in-place 방식
function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }

    return left;
  }

  return array;
}
