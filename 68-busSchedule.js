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
