// # 문제92 : 키보드 고장

// P 회사의 회계를 처리하던 은정은 커피를 마시다가 키보드에 커피를 쏟고 말았습니다.
// 휴지로 닦고 말려보았지만 숫자 3, 4, 6이 도통 눌리지 않습니다.
// 10분 뒤, 모든 직원들에게 월급을 입금해 주어야 합니다.
// 여유 키보드는 없으며, 프로그래밍을 매우 잘하고, 모든 작업을 수작업으로 하고 있습니다.

// 이에 눌리지 않는 키보드를 누르지 않고 월급 입금을 두 번에 나눠주고 싶습니다.

// 1. 직원은 2000명이며, 3초 이내 수행을 해야합니다.
// 2. 입력값의 형식은 csv파일형식이며 이과장 '3,000,000', 'S은행', '100-0000-0000-000' 형식으로 주어집니다.
// 3. 출력값의 형식은 csv파일형식이며 이과장 '1,500,000', '1,500,000', 'S은행', '100-0000-0000-000' 입니다. 또는 '1,000,000', '2,000,000', 'S은행', '100-0000-0000-000' 도 괜찮습니다.

/**
 * 월급을 숫자 3, 4, 6을 사용하지 않고 둘로 나눠서 반환하는 함수
 * @param {string} input csv 형식의 월급 정보
 * @returns {string} 월급이 나눠진 csv 형식의 월급 정보
 */
function divideSalary(input) {
  // 임직원 한 명의 월급 정보가 요소인 배열로 변환한다.
  const salaryInfos = input.split("\n");

  // 급여가 나눠진 월급 정보 배열로 변경한다.
  const dividedSalaryInfos = salaryInfos.map((salaryInfo) => {
    // 임직원 한 명의 월급 정보를 쉼표 기준으로 나누고
    const separateValues = salaryInfo.split(",");
    // 나눠진 월급 정보에서 월급만 뽑아내고 감싼 따옴표를 제거한 뒤,
    const salary = separateValues
      .splice(1, separateValues.length - 3)
      .join("")
      .split("'")[1];
    // 남아있는 이름, 은행명, 계좌번호를 구조분해 할당한다.
    const [name, bank, account] = separateValues;

    // 둘로 나눠진 월급을 저장할 변수를 선언한다.
    let dividedSalary1 = "";
    let dividedSalary2 = "";

    // 월급의 숫자를 한 자리씩 순회하면서
    for (const figure of salary) {
      // 3, 4, 6일 경우 둘로 나누고
      switch (figure) {
        case "3":
          dividedSalary1 += "2";
          dividedSalary2 += "1";
          break;
        case "4":
          dividedSalary1 += "2";
          dividedSalary2 += "2";
          break;
        case "6":
          dividedSalary1 += "5";
          dividedSalary2 += "1";
          break;
        // 이외의 경우는 나눌 필요가 없으므로 숫자를 그대로 넣는다.
        default:
          dividedSalary1 += figure;
          dividedSalary2 += "0";
          break;
      }
    }
    // 나눠진 월급을 숫자로 변환한 뒤 쉼표를 찍는다.
    dividedSalary1 = parseInt(dividedSalary1).toLocaleString();
    dividedSalary2 = parseInt(dividedSalary2).toLocaleString();

    // 나눠지기 전 월급의 자리에 나눠진 월급들을 넣어서 반환한다.
    return `${name},'${dividedSalary1}','${dividedSalary2}',${bank},${account}`;
  });

  // 월급이 나눠진 월급 정보의 배열을 문자열로 합쳐서 반환한다.
  return dividedSalaryInfos.join("\n");
}

/**
 * 지정된 직원 수만큼의 월급 정보를 생성해 반환하는 함수
 * @param {number} count 직원 수
 * @returns {string} 월급 정보
 */
function makeSalaryInfo(count) {
  const salaryInfo = [];

  for (let i = 0; i < count; i++) {
    const salary = Math.floor(Math.random() * 10000000 + 1000000);
    const formattedSalary = salary.toLocaleString();
    salaryInfo.push(`이대표,'${formattedSalary}','S은행','100-0000-0000-001'`);
  }

  return salaryInfo.join("\n");
}

// 임직원 2000명의 월급 정보를 생성한다.
const salaryInfo = makeSalaryInfo(2000);
// 3초 내에 처리해야하므로 측정한다.
console.time("test");
const dividedSalaryInfo = divideSalary(salaryInfo);
console.log(dividedSalaryInfo);
console.timeEnd("test");
// 평균 50ms 초반의 처리속도를 기록했다.
