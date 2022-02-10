/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet1 = function (nums) {
    const length = nums.length

    if (length < 3) {
        return false;
    }

    for (let mid = 1; mid < length; mid++) {
        let checkFront = false;
        let checkBack = false;

        for (let front = mid - 1; front >= 0; front--) {
            if (nums[front] < nums[mid]) {
                checkFront = true;
                break;
            }
        }

        for (let back = mid; back < length; back++) {
            if (nums[mid] < nums[back]) {
                checkBack = true;
                break;
            }
        }

        if (checkFront && checkBack) {
            return true;
        }
    }

    return false;
};

