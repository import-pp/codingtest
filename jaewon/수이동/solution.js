/**
 * @param {number} target
 * @param {number} maxDoubles
 * @returns {number}
 *
 * 타겟으로 부터 역산하는 방식으로 구현
 */
const minMoves = function (target, maxDoubles) {
  let count = 0; // 계산 횟수
  while (true) {
    if (maxDoubles === 0 || target === 1) return count + target - 1; // 나눈 횟수가 다떨어지거나 1에 도달하는 경우
    if (target % 2 === 0) {
      // 나누어 떨어지는 경우
      target /= 2; // 나눈 값을 타겟으로 변경
      maxDoubles--; // 나눌 수 있는 횟수 차감
    } else {
      target -= 1; // 한 칸 이동
    }
    count++; // 계산 횟수 증가
  }
};
