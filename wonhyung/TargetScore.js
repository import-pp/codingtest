
/**
 1에서 시작해서 원하는 어떤 타겟 정수에 도달하는 게임이다.
 현재 정수에서 1을 증가시키거나, 현재 정수의 2배 중에 한개를 실행할 수 있다.
 1 <= target <= 10의9승
 0 <= maxDoubles <= 100
 +1 연산은 횟수 제한이 없지만, 곱2 연산은 maxDoubles라는 제한이 있다.
 타겟까지 도달하는데 최소 연산 횟수를 구해야 한다.
 **/

// 생각해야 할 것. 곱 연산은 숫자가 클때 사용해야 타겟에 쉽게 접근
// 반드시 맥스 더블만큼의 곱연산을 사용 하지 않아도 최소 횟수를 구할 수 있음.

/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */


const minMoves = function(target, maxDoubles) {
    //이렇게 하니깐 테스트 케이스 일부분에서 타임 리밋 아웃이 떠버림.
    let count = 0;

    while(target > 1) {
        if(maxDoubles > 0) {
            if(target % 2 ===0){
                //타겟이 짝수

                target = target/2;
                maxDoubles = maxDoubles-1;
                count++;
            } else {
                target = target -1;
                count++;
            }
        } else {
            target = target -1;
            count++;
        }
    }

    return count;
};




