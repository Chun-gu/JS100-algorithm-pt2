// 문제68 : 버스 시간표

// 학교가 끝난 지원이는 집에 가려고 합니다. 
// 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

// 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

// - 버스 시간표와 현재 시간이 입력으로 주어집니다.
// - 출력 포맷은 "00시 00분"입니다.
//    만약 1시간 3분이 남았다면 **"01시간 03분"**으로 출력해야 합니다.
// - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 **"지나갔습니다."**라고 출력합니다.

// 입력
// ["12:30", "13:20", "14:13"]
// "12:40"

// 출력
// ['지나갔습니다', '00시간 40분', '01시간 33분']

/**
 * 버스 시간표와 현재 시간을 받아서 시간표에 따른 남은 시간을 반환하는 함수
 * @param {Array<string>} arrivals 버스 시간표 목록
 * @param {string} currentTime 현재 시간
 * @returns {Array<string>} 현재 버스의 도착 상태
 */
function getCurrentStatus(arrivals, currentTime) {
  // 시간표의 시간과 현재 시간을 분단위로 변경한다.
  const currentTimeByMin = convertIntoMin(currentTime);
  const arrivalsByMin = arrivals.map((arrival) => convertIntoMin(arrival));

  // 버스의 도착시간을 순회하며 배열을 만드는데,
  const currentStatus = arrivalsByMin.map((arrival) => {
    // 현재 시간 이전이면 '지나갔습니다' 반환하고
    if (arrival < currentTimeByMin) return "지나갔습니다.";

    // 아직이라면 남은 분단위의 시간을 시간단위로 바꿔서 반환한다.
    const minutesLeft = arrival - currentTimeByMin;
    const hoursLeft = convertIntoHour(minutesLeft);

    return hoursLeft;
  });

  return currentStatus;
}
/**
 * hour 단위인 시간을 minute 단위로 변경하는 함수
 * @param {string} timeByHour hour 단위로 나타낸 시간
 * @returns {number} minute 단위로 변경된 시간
 */
function convertIntoMin(timeByHour) {
  let temp = timeByHour.split(":").map(Number);
  const timeByMin = temp[0] * 60 + temp[1];

  return timeByMin;
}

/**
 * minute 단위인 시간을 hour 단위로 변경하고 "00시간 00분"의 형식으로 반환하는 함수
 * @param {number} timeByMin minute 단위로 나타낸 시간
 * @returns {string} hour 단위로 변경된 "00시간 00분" 형식의 시간
 */
function convertIntoHour(timeByMin) {
  const hour = Math.floor(timeByMin / 60)
    .toString()
    .padStart(2, "0");
  const min = (timeByMin % 60).toString().padStart(2, "0");

  return `${hour}시간 ${min}분`;
}

const schedule = ["12:30", "13:20", "14:13"];
const currentTime = "12:40";
const result = getCurrentStatus(schedule, currentTime);
console.log(result);
