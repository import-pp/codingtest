var minMoves = function (target, maxDoubles) {
    let count = 0;

    if (target === 1) {
        return 0;
    }

    if (maxDoubles === 0) {
        return target - 1;
    }

    while (target > 1) {
        if (maxDoubles > 0) {
            if (target % 2 === 0) {
                //타겟이 짝수
                target = target / 2;
                maxDoubles = maxDoubles - 1;
                count++;
            } else {
                target = target - 1;
                count++;
            }
        } else {
            count = count + target - 1;
            break;
        }
    }

    return count;
};