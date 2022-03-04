from itertools import combinations

class Solution:
    def longestPalindrome(self, s: str) -> str:
        x,y = 0,0
        s=s.replace("","@")
        if len(list(set(s)))==1:
            x,y=0,len(s)
            pass
        else:
            i, compare = 1,1
            while i < len(s):
                if (compare<=i) and (compare<=len(s)-i-1):
                    if s[i-compare] != s[i+compare]:
                        if s[i-compare]==s[i] and y-x<compare:
                            x,y=i-compare,i
                        elif s[i]==s[i+compare] and y-x<compare:
                            x,y=i,i+compare
                        i+=1
                        compare=1
                    else:
                        if y-x<compare+compare:
                            x,y=i-compare,i+compare
                        compare+=1
                else:
                    i+=1
                    compare=1

        return s[x:y+1].replace("@","")
