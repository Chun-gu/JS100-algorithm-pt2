// # 문제97 : 택배 배달

// n 명의 택배 배달원은 쌓인 택배를 배달해야 합니다.
// 각 택배는 접수된 순서로 배달이 되며 택배마다 거리가 주어집니다. 
// 거리1당 1의 시간이 걸린다고 가정하였을 때 모든 택배가 배달 완료될 시간을 구하세요.

// 1. 모든 택배의 배송 시간 1 이상이며 배달지에 도착하고 돌아오는 왕복 시간입니다.
// 2. 택배는 물류창고에서 출발합니다.
// 3. 배달을 완료하면 다시 물류창고로 돌아가 택배를 받습니다.
// 4. 물류창고로 돌아가 택배를 받으면 배달을 시작합니다.
// 5. 택배를 상차할 때 시간은 걸리지 않습니다.

// 입력은 배달원의 수와 택배를 배달하는 배달 시간이 주어집니다.

// 입력
// const 배달원 = 3;
// const 배달시간 = [1,2,1,3,3,3];

// 출력
// 5

/**
 * 배달 총 소요시간을 반환하는 함수
 * @param {number} deliveryManCount 배달원 수
 * @param {number[]} parcels 택배 목록
 * @returns {number} 배달 총 소요시간
 */
function getDeliveryTime(deliveryManCount, parcels) {
  // 각 배달원의 배달현황을 기록할 배열을 만든다.
  const deliveryMans = new Array(deliveryManCount).fill(0);
  // 택배 목록을 역순으로 정렬한다.
  const reversedParcels = parcels.reverse();
  // 총 배달시간을 0으로 초기화한다.
  let deliveryTime = 0;

  // 배송해야 할 택배가 아직 남아있는 동안
  while (reversedParcels.length !== 0) {
    // 각 배달원을 순회하면서
    for (let i = 0; i < deliveryMans.length; i++) {
      // 배달원이 배달 중이 아니라면
      if (deliveryMans[i] === 0 && reversedParcels.length !== 0) {
        // 택배를 하나 넣어준다.
        deliveryMans[i] = reversedParcels.pop();
      }
    }
    // 택배 할당이 1단계 끝났으므로,
    // 각 배달원의 배달시간을 1 감소시키고
    deliveryMans.map((_, index) => (deliveryMans[index] -= 1));
    // 총 배달시간을 1 증가시킨다.
    deliveryTime += 1;
  }

  // 모든 택배가 배달원들에게 할당된 뒤,
  // 남은 배달시간 중 가장 긴 시간을 총 배달시간에 더한다.
  deliveryTime += Math.max(...deliveryMans);

  return deliveryTime;
}

const deliveryManCount = 3;
const parcels = [1, 2, 1, 3, 3, 3];

const deliveryTime = getDeliveryTime(deliveryManCount, parcels);
console.log(deliveryTime);
