// # 문제98 : 청길이의 패션 대회

// 패션의 선도주자 청길이는 패션의 발전을 위해 패션쇼를 방문해 유니크한 아이템을 조사하기로 하였습니다.
// 청길이는 입장하는 사람들의 패션에서 처음 보는 아이템 만을 기록합니다.
// 이때 청길이의 기록에서 아래 규칙에 맞게 배열로 출력해 주세요.

//     1. 청길이는 각 옷의 종류를 정수로 기록해 놓습니다.
//        ex) 입력은 "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4" 형태의 문자열입니다.
//     2. 기록은 청길이가 번호 순서로 유니크한 옷의 번호를 적습니다.
//     3. 유니크한 옷은 기록된 순서로 추출되고 출력됩니다.
//        ex) 출력은 [3,1,4,2]입니다.

// 입력
// "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3"
// 출력
// [4, 2, 3, 1]

// 입력
// "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4"
// 출력
// [3, 1, 4, 2]

/**
 * 기록 중 유니크한 옷들의 중복을 제거한 배열을 반환하는 함수
 * @param {string} record 패션쇼에 나온 유니크한 옷들의 기록
 * @returns {number[]} 유니크한 옷들의 배열
 */
function getUniqueClothes(record) {
  // '1번: ', ' 2번: ' 등을 제외한 뒤 옷의 번호만 뽑아낸다.
  const clothes = record
    .split(/\s?\d번:\s/)
    .slice(1)
    .join(",")
    .split(",")
    .map(Number);
  // set을 이용해 옷의 목록 중 중복을 제거한다.
  const uniqueClothes = new Set(clothes);
  console.log(uniqueClothes);

  // 배열 형태로 반환한다.
  return [...uniqueClothes];
}

const record = "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3";

const uniqueClothes = getUniqueClothes(record);
console.log([...uniqueClothes]);
