from itertools import combinations

class Solution:
    def longestPalindrome(self, s: str) -> str:
        word=[]
        reverse = s[::-1]
        start = 0
        for i in range(0,len(s)):
            for j in range(0,len(s)):
                if s[i:j] in s[::-1] and s[i] == s[j]:
                    word.append(s[i:j+1])
        print(word)
        return max(word, key=len)




solution = Solution()
print(solution.longestPalindrome('babad'))
print(solution.longestPalindrome('cbbd'))
print(solution.longestPalindrome('zabaccab'))


##Example 1:
##Input: s = "babad"
##Output: "bab"
##Explanation: "aba" is also a valid answer.

##Example 2:
##Input: s = "cbbd"
##Output: "bb"

##[i for i, x in enumerate(a) if x == 'a']

