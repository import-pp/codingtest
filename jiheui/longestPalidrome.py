from itertools import combinations

class Solution:
    def longestPalindrome(self, s: str) -> str:
        word=[]
        if len(s)==1: return s
        elif len(s)==2:
            if s[0]==s[1]: return s
            else: return s[0]
        elif len(set(s))==1:
            return s
        else:
            for i in range(1, len(s)-1):
                add=1
                while True:
                    if add<=i and add<len(s)-i and s[i-add]==s[i+add]:
                        word.append(s[(i-add):(i+add+1)])
                        add+=1
                    elif add<len(s)-i and s[i]==s[i+add]:
                        word.append(s[i:i+add+1])
                        add+=1
                    else: break
                i+=add
            if len(word)>0: return max(word, key=len)
            else: return ''




