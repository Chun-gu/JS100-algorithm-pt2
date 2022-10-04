// # 같은 의약 성분을 찾아라!

// 의약품 성분이 총 8개인 약품들이 있습니다. 예를 들어 다음 데이터는 총 8개의 성분을 갖습니다.

// 판콜비 = 'ABCDEFGH'
// 넥타이레놀 = 'EFGHIJKL'

// 특정 약품 A의 성분이 공개되었을 때, 이와 유사한 성분을 가진 데이터들의 출력을 구하는 문제입니다.

// 입력 : 'ABCDEFGH' 4
// 데이터 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 1만 개의 데이터
// 출력 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 4개의 요소가 같은 약품 전부(4개 이상이 아니며 같은 요소가 4개인 것을 출력해야 합니다.)

// * 해당 문제는 시간제한이 있습니다.
// * 제약 데이터의 성분은 중복이 될 수 없습니다.
// (예를 들어 'AAABBBAB'와 같은 데이터는 없습니다.)

/**
 * 타겟 약품과 동일 성분의 개수가 일치하는 약품들을 찾아서 반환하는 함수
 * @param {string} input 타겟 약품과 동일 성분의 개수
 * @returns {string[]} 동일 성분의 개수가 같은 약품들의 배열
 */
function findSimilarMedicine(input) {
  // input을 약품과 개수로 나눠서
  const [medicine, count] = input.split(" ");
  // 약품은 배열로
  const targetIngredients = medicine.split("");
  // 개수는 숫자로 변환한다.
  const targetCount = Number(count);
  // 10000개의 랜덤한 약품을 만든다.
  const medicines = makeMedicines(10000);
  // 타겟 약품과 지정된 개수만큼의 동일 성분을 가진 유사 약품을 저장할 배열을 만든다.
  const similarMedicines = [];

  // 10000개의 랜덤한 약품을 탐색하면서
  medicines.forEach((medicine) => {
    let sameIngredientCount = 0;

    // 타겟 약품의 성분을 하나씩 순회하면서
    for (let i = 0; i < targetIngredients.length; i++) {
      // 랜덤한 약품에 타겟 약품의 성분이 포함되어 있으면
      if (medicine.includes(targetIngredients[i])) {
        // 동일 성분의 개수를 하나 늘린다.
        sameIngredientCount += 1;
      }
      // 동일 성분의 개수가 지정된 개수를 넘어가면 탐색을 종료한다
      if (sameIngredientCount > targetCount) return;
    }
    // 동일 성분의 개수가 지정된 개수와 일치하면 유사약품 배열에 넣는다.
    if (sameIngredientCount === targetCount) similarMedicines.push(medicine);
  });

  return similarMedicines;
}

/**
 * 랜덤한 약품을 지정된 개수만큼 만드는 함수
 * @param {number} COUNT 만들 약품의 개수
 * @returns {string[]} 랜덤한 약품들의 배열
 */
function makeMedicines(COUNT) {
  // 약품 성분(A~Z)을 갖고온다.
  const ingredients = getIngredients();

  let count = 0;
  const medicines = [];

  // count가 지정된 개수보다 적을 동안
  while (count < COUNT) {
    // 8개의 성분을 조합해 랜덤한 약품을 만들고
    const medicine = makeMedicine(ingredients, 8);
    // 만든 약품이 이미 존재하지 않는 약품이면
    if (!medicines.includes(medicine)) {
      // 약품 배열에 넣고
      medicines.push(medicine);
      // count를 1 증가시킨다.
      count += 1;
    }
  }

  return medicines;
}

/**
 * 의약성분 A~Z까지의 배열을 반환하는 함수
 * @returns {string[]} 의약성분의 배열
 */
function getIngredients() {
  const ingredients = [];

  // 아스키 코드를 이용해 A~Z까지의 문자열을 배열에 넣는다.
  for (let i = 65; i < 91; i++) {
    ingredients.push(String.fromCharCode(i));
  }

  return ingredients;
}

/**
 * 의약 성분들을 랜덤하게 조합해 약품을 만들어 반환하는 함수
 * @param {string[]} ingredients 성분들의 배열
 * @param {number} count 조합할 성분의 개수
 * @returns {string} 랜덤한 약품
 */
function makeMedicine(ingredients, count) {
  // 성분들을 임시로 저장해둘 배열을 만든다.
  const temp = [];

  // 임시 배열의 길이가 조합할 성분의 개수보다 짧을 동안
  while (temp.length < count) {
    // 성분들 중 랜덤하게 하나를 뽑아서
    const ingredient =
      ingredients[Math.floor(Math.random() * ingredients.length)];
    // 임시 배열에 존재하지 않는 성분이면
    if (!temp.includes(ingredient)) {
      // 임시 배열에 넣는다.
      temp.push(ingredient);
    }
  }

  // temp를 문자열로 만든다.
  const randomMedicine = temp.join("");

  return randomMedicine;
}

const input = "ABCDEFGH 4";
const similarMedicines = findSimilarMedicine(input);
console.log(similarMedicines);
