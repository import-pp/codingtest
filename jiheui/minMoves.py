from functools import reduce

class Solution:
    def minMoves(self, target: int, maxDoubles: int) -> int:
        remainder=0
        for i in range(maxDoubles):
            target, left = divmod(target, 2)
            remainder+=left

        return target+remainder+maxDoubles
