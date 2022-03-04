from functools import reduce

class Solution:
    def minMoves(self, target: int, maxDoubles: int) -> int:
        moves = 0
        while target>1:
            if maxDoubles==0:
                moves+=target-1
                target=1
            else:
                if target%2==0:
                    target=target//2
                    moves+=1
                    maxDoubles-=1
                else:
                    target-=1
                    moves+=1

        return moves


solution = Solution()
print(solution.minMoves(5,0))
## 4
print(solution.minMoves(10,4))
## 4
print(solution.minMoves(19,2))
## 7
