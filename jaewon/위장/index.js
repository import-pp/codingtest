function solution(clothes) {
  let hash = new Map(); // hash Map 생성
  let count = 1; // 아무것도 입지 않는 경우는 없기에 초기값 1 설정
  for (let [, target] of clothes) {
    // 겹치는 의상 이름이 없음 해당 부위에 무조건 의상 추가
    if (hash.has(target)) {
      // 이미 부위의 갯수가 추가된 경우
      hash.set(target, hash.get(target) + 1); // 기존 갯수에 추가
    } else {
      // 부위가 처음 등장하는 경우
      hash.set(target, 1); // 한개 추가
    }
  }
  for (let value of hash) {
    // 모든 부위를 순회하며
    count *= value[1] + 1; // 하나도 입지않은 경우 1 추가해서 곱함
  }
  return count - 1; // 어떤 부위도 입지않는 경우 제외하고 출력
}
